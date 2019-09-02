// /////////////////
// 環境宣告

// 引入自定義 files
const formItem = require('./data/formItem.json').results
const checkUser = require('./checkUser.js')

// 引入 Express.js framework
const express = require('express')
const app = express()

// 引入 handlebars template engine
const exphbs = require('express-handlebars')
const option = {
  defaultLayout: 'main',
  extname: 'hbs',
}

app.engine('hbs', exphbs(option))
app.set('view engine', 'hbs')

// 相關 setting
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 3000)

// /////////////////
// 設定 route

app.get('/', (req, res) => {
  // 發送 html，把存在瀏覽器的登入狀態 POST 回來
  const page = { js: 'direct' }

  res.render('direct', { page })
})

app.post('/', (req, res) => {
  const user = req.body.user  // 僅登入成功才有值

  // 未登入時，導向 login page
  if (!user) return res.redirect('/login')

  // 登入狀態時
  const page = { js: 'index' }

  res.render('index', { page, user })
})

app.get('/login', (req, res) => {
  // 初始化頁面
  formItem.forEach(item => {
    delete item.input
  })

  const page = { css: 'login', js: 'login' }

  res.render('login', { page, formItem })
})

app.post('/login', (req, res) => {
  // 取得 input 確認 user 情報
  const input = req.body
  const user = checkUser(input)  // 帳密不符回傳 false

  // 登入成功，將登入狀態 send 回 client
  let page = { js: 'sendInfo' }
  if (user) return res.render('sendInfo', { page, user: user.firstName })

  // 登入失敗，記錄 user input，使頁面能保留 input 內容
  formItem.forEach(item => {
    item.input = input[item.id]
  })

  page = { css: 'login', js: 'login' }

  res.render('login', { page, formItem, input })
})

// 提供 User 取得假帳號資料
app.get('/users', (req, res) => {
  res.sendFile(__dirname + '/data/users.json')
})

// /////////////////
// 啟動 Server
app.listen(app.get('port'), () => {
  console.log(`Node.js Server with Express is running => http://localhost:${app.get('port')}`)
})

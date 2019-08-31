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
  // 未登入時，導向 login page
  if (!app.get('user')) return res.redirect('/login')
  
  // 登入時
  res.render('index', { user: app.get('user') })
})

app.get('/login', (req, res) => {
  // 初始化 login info
  app.set('user', null)

  formItem.forEach(item => {
    delete item.input
  })

  res.render('login', { page: 'login', formItem })
})

app.post('/login', (req, res) => {
  // 取得 input 與 user 情報
  const input = req.body
  const user = checkUser(input)  // 登入失敗回傳 false
  app.set('user', user)  // 充當cookie，儲存登入資料

  // 登入成功，導向進首頁
  if (user) return res.redirect('/')

  // 登入失敗，記錄 user input，使頁面能保留 input 內容
  formItem.forEach(item => {
    item.input = input[item.id]
  })

  res.render('login', { page: 'login', formItem, input })
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

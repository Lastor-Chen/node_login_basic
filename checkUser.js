// 引入 user data
const users = require('./data/users.json').results

// /////////////////////
// 主函式
function checkUser(input) {
  // check email
  let target = users.find(user => user.email === input.email)
  if (!target) { target = false }

  // check password
  if (target.password !== input.password) { target = false }
  
  // 驗證成功 => user, 失敗 => false
  return target
}

module.exports = checkUser

// 從 input 中取回 user name
let user = $('input').val()

// 將 user name 作為登入狀態，存於 client cache
localStorage.setItem('user', user)

$('form').submit()
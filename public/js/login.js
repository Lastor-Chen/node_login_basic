// for index page

// login fail時，初始化 Bootstrap toast
$('.toast').toast('show')

$('form').on('submit', function (e) {
  e.preventDefault()
  
  if (this.checkValidity()) return this.submit()
  
  // 加入 Bootstrap 驗證樣式
  this.classList.add('was-validated')
})
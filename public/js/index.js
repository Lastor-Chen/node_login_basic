$('#sign-out').on('click', e => {
  e.preventDefault()

  localStorage.removeItem('user')
  window.location.href = '/login'
})
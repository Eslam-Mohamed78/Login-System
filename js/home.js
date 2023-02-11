var user = document.querySelector('.text p');

user.innerHTML = `Welcome  ${localStorage.getItem('current-user')}....`
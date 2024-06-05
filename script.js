const mail = document.getElementById('mail'),
	info = document.getElementById('info'),
	btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	mail.value === ''
		? ((info.innerHTML = 'Enter an email address'),
		  (info.style.color = 'var(--light-red-error)'))
		: !mail.value.match(pattern)
		? ((info.innerHTML = 'Please enter a valid  email address'),
		  (info.style.color = 'var(--light-red-error)'))
		: mail.value.match(pattern)
		? ((info.innerHTML = 'Check your email'),
		  (info.style.color = 'var(--cyan-inside-call-to-action-gradient)'))
		: '';

	mail.value = '';
});

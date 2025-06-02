document.querySelectorAll('.item').forEach(function(item) {
	item.addEventListener('click', function() {
		this.classList.toggle('active');
	});
});


document.querySelector('#darkmode').addEventListener('click', function() {
      document.getElementsByTagName('body')[0].classList.toggle('dark');
});
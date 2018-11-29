var mainNav = document.getElementById('main-nav');
var menu = document.getElementById('javaB');

var belowNavList = mainNav.getElementsByClassName('click');

var width = 1366;

/*window.addEventListener('resize', function() {
	width = $(window).width();

	if(width < 769){
		navigation();
	}

});*/

menu.addEventListener('click', function() {
	navig();
});

const navig = () => {
	// console.log('hmm');

	if (document.getElementById('javaA').classList.contains('mobile')) {
		console.log('hmm');
		document.getElementById('javaA').classList.remove('mobile');	
		document.getElementById('javaC').classList.remove('nav');																																																																																																																																																		
	}else {
		document.getElementById('javaA').classList.add('mobile');
		document.getElementById('javaC').classList.add('nav');
	}
}

const navClick = () => {
	var navClicks = mainNav.getElementsByClassName('click');
}


$('#javaC li').click(function() {
	$('#javaC li').removeClass('current');
	$(this).addClass('current');
})



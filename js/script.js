$('.page-scroll').on('click', function(e) {

 var tujuan = $(this).attr('href');

 var elemenTujuan = $(tujuan);

 $('html , body').animate({
  scrollTop: elemenTujuan.offset().top - 50
 }, 1250, 'easeInOutExpo');

 e.preventDefault();
});


// Menyimpan parallax

// about
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();


	// jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/5 +'%)'
	});



	// portofolio
	if( wScroll > $('.portofolio').offset().top -250 ) {
		$('.portofolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portofolio .thumbnail').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}
});
$(document).ready(function() {
	
	var dropMenu = $('li.dropdown_menu'),
		subMenu = $('.submenu'),
		sideMenu = $('.side_menu'),
		img = $('img'),
		copyright = $('.bottom_menu li').last();

	dropMenu.on('click', function(){
		dropMenu.toggleClass('active');
		subMenu.toggleClass('display_block');
	});

	dropMenu.after('<li class="toggle_img dropdown_menu">Услуги</li>');
	var toggleImg = $('.toggle_img');
	toggleImg.on('click', function(e) {
		img.fadeToggle('slow');
	})

	sideMenu.each(function(){
  		$(this).children().filter(':odd').css({'background-color':'#525151', 
  											'font-family':'Times New Roman'});
	});

	copyright.html(copyright.text().replace('2014', '2016'));

});
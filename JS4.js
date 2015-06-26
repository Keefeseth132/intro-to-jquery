//part 1
$('.button').click(function(){
	$('body').append('some text ')
});

$('.button1').click(function(){
	$('body').append('<h1> some text </h1>')
});

$('.button2').click(function(){
	$('body').append('<ul> <li>one</li> <li>two</li> <li>three</li> </ul>')
});

//part 2

$('p').mouseover(function(){
	$('p').css('color', 'pink')
});

$('h1').text(function(){
	$('h1').text('This is a header' + '!')
});

$('h2').text(function(){
	$('h2').text('This is a subheader' + '!')
});

$('a').click(function(){
	var userconfirm = confirm('do you wish to leave the page?')
	if (userconfirm === true){
		$('a').show();

	}
	else {
		$('a').hide();
	}
		
});

//part 3
$(document).on('ready', function(){
	$('.giant-button').click(function(){
		$('.button-container').append('<diV class="popup"> <button class="inside-button"> you clicked me </button> </div>')
})
	$('.button-container').on('click', '.popup', function(event){
		event.preventDefault()
		$('.popup').hide();
	})

})

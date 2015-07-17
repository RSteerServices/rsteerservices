//lightbox

//when a user clicks on an image
$('img').click(function() {
//check the image that was just clicked
//store the src of the image
var imageSource = $(this).attr('src');
//update the image within our lightbox to new image with above src
$('.lightbox img').attr('src',imageSource);
//fade in the lightbox
$('.lightbox').fadeIn();
})

//fade out when we click on the lightbox

$('.lightbox').click(function(){
	$('.lightbox').fadeOut();
})
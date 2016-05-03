
//adding the .shown class to the first slide
$('.slide').first().addClass('shown');
$('.carousel-nav ul li').first().css('color', 'black');

function prevSlide() {

  var $slide = $('.shown');

  // change the color of the left button while mouse is pressed
  $('.button-left').css('color', 'white');

  if ($slide.is(':first-child')) {
    $slide
      .removeClass('shown')
      .parent()
      .children('.slide')
      .last()
      .addClass('shown');
  }
  else {
    $slide
      .first()
      .removeClass('shown')
      .prev()
      .addClass('shown');
  }

  // setting the carousel navigation to current slide
  changeBulletColor();
}


function nextSlide() {

  var $slide = $('.shown');

  // change color of button
  $('.button-right').css('color', 'white');

  if ($slide.is(':last-child') ) {
    // checks if slide is the last child
    // Go back to the beggining.
    $slide
      .removeClass('shown')
      .parent()
      .children('.slide')
      .first()
      .addClass('shown');
  }
  else {
    // select current shown element
      // removeClass of shown
      // find the next() sibling element
      // AddClass of shown to that new selection
    $slide
      .first()
      .removeClass('shown')
      .next()
      .addClass('shown');
  }
  // setting the carousel navigation to current slide
  changeBulletColor();
}

function changeBulletColor() {
  var shownIndex = $('.shown').index();
  var shownBullet = $('.carousel-nav ul li');
  shownBullet.eq(shownIndex - 1).css('color', 'white');  //returns element @ index and changes color
  shownBullet.eq(shownIndex).css('color', 'black');
}

// resetting button color on mouse off
function buttonReset() {
  $('.carousel-button').css('color', 'white');
}

function goToSlide() {
  $('.shown').removeClass('shown');
  var shownIndex = $('.shown').index();
}

function buttonDownLeft() {
  $('.button-left').css('color', 'black');
}
function buttonDownRight() {
  $('.button-right').css('color', 'black');
}

// EVENT TRIGGERS
$('.button-left').on('mouseup', prevSlide);
$('.button-left').on('mouseout', buttonReset);
$('.button-left').on('mousedown', buttonDownLeft);
$('.button-right').on('mouseup', nextSlide);
$('.button-right').on('mouseout', buttonReset);
$('.button-right').on('mousedown', buttonDownRight);

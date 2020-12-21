let length = document.querySelectorAll('#bxslider .slide-inner .slide-item').length;
let current = 0;
var carousel = $('.slide-inner'),
  slideWidth = 748;
stack = 0;

let htmlSLideIndicators = ``;
for (let i = 0; i < length; i++) {
  htmlSLideIndicators += `<li data-target="#bxslider" data-slide-to="${i}"${i === current ? ' class="active"' : ''}></li>`;
}
let ol = document.createElement('ol');
ol.className = 'slide-indicators';
ol.innerHTML = htmlSLideIndicators;
document.querySelector('#bxslider').appendChild(ol);

$('.slide-indicators li').click(function () {
  if (carousel.hasClass('transition')) return;
  let data = $(this).data('slideTo');
  resetStack();
  SlideTo(current, data);
});

function resetStack() {
  if (stack < 0) {
    for (let i = 0; i < length - Math.abs(stack); i++) {
      $('.slide-item:first').before($('.slide-item:last'));
    }
    carousel.css('transform', 'translateX(' + (length - Math.abs(stack)) * -slideWidth + 'px)');
    stack = 0;
  }
  if (stack > 0) {
    for (let i = 0; i < length - Math.abs(stack); i++) {
      $('.slide-item:last').after($('.slide-item:first'))
    }
    carousel.css('transform', 'translateX(' + Math.abs(stack - 1) * -slideWidth + 'px)');
    stack = 0;
  }
}

$('a[href="#bxslider"').click(function () {
  if (carousel.hasClass('transition')) return;
  let data = $(this).data('slide');
  let length = document.querySelectorAll('#bxslider .slide-inner .slide-item').length;
  if (length < 2) return;
  if (data === 'next') {
    let next = current + 1;
    if (stack < 0) resetStack();
    if (next === length) {
      next = 0;
      stack = 1;
      SlideRight(current, next);
    }
    else {
      if (stack > 0) {
        stack++;
        SlideRight(current, next)
      }
      else {
        SlideTo(current, next)
      }
      if (Math.abs(stack) === length) stack = 0;
    }
  }
  else {
    let prev = current - 1;
    if (stack > 0) resetStack();
    if (prev < 0) {
      prev = length - 1;
      stack = -1;
      SlideLeft(current, prev)
    }
    else {
      if (stack < 0) {
        stack--;
        SlideLeft(current, prev)
      }
      else {
        SlideTo(current, prev)
      }
      if (stack === length) stack = 0;
    }
  }
});

function SlideTo(curActive, nexActive) {
  setTimeout(function () {
    carousel.addClass('transition')
      .css('transform', 'translateX(' + (-slideWidth * nexActive) + 'px)');
  })
  setTimeout(function () {
    carousel.removeClass('transition')
  }, 400)
  changeIndicatorActive(curActive, nexActive)
}
function changeIndicatorActive(curActive, nexActive) {
  var jIndicatorCurrent = $(document.querySelectorAll('.slide-indicators li')[curActive]);
  var jIndicatorNext = $(document.querySelectorAll('.slide-indicators li')[nexActive]);
  jIndicatorCurrent.removeClass('active');
  jIndicatorNext.addClass('active');
  current = nexActive;
}

function SlideLeft(curActive, nexActive) {
  $('.slide-item:first').before($('.slide-item:last'));
  carousel.css('transform', 'translateX(' + (-slideWidth) + 'px)');
  setTimeout(function () {
    carousel.addClass('transition');
    carousel.css('transform', 'translateX(0px)');
  })
  setTimeout(function () {
    carousel.removeClass('transition')
  }, 400)
  changeIndicatorActive(curActive, nexActive)
}

function SlideRight(curActive, nexActive) {
  $('.slide-item:last').after($('.slide-item:first'));
  carousel.css('transform', 'translateX(' + (-(length - 1) * slideWidth + slideWidth) + 'px)');
  setTimeout(function () {
    carousel.addClass('transition');
    carousel.css('transform', 'translateX(' + (-(length - 1) * slideWidth) + 'px)');
  })
  setTimeout(function () {
    carousel.removeClass('transition')
  }, 400)
  changeIndicatorActive(curActive, nexActive)
}




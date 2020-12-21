let length = document.querySelectorAll('#bxslider .slide-inner .slide-item').length;
let current = 0;
var carousel = $('.slide-inner'),
  slideWidth = 748;

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
  SlideTo(current, data);
});

$('a[href="#bxslider"').click(function () {
  if (carousel.hasClass('transition')) return;
  let data = $(this).data('slide');
  let length = document.querySelectorAll('#bxslider .slide-inner .slide-item').length;
  if (length < 2) return;
  if (data === 'next') {
    let next = current + 1;
    if (next === length) {
      next = 0;
      SlideRight(current, next);
    }
    else SlideTo(current, next)
  }
  else {
    let prev = current - 1;
    if (prev < 0) {
      prev = length - 1;
      SlideLeft(current, prev)
    }
    else SlideTo(current, prev)
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
  let clone = $('.slide-item:last').clone()
  $('.slide-item:first').before(clone);
  carousel.css('transform', 'translateX(' + (-slideWidth) + 'px)');
  setTimeout(function () {
    carousel.addClass('transition');
    carousel.css('transform', 'translateX(0px)');
  })
  setTimeout(function () {
    carousel.removeClass('transition')
    $('.slide-item:first').remove();
    carousel.css('transform', 'translateX('+ -slideWidth*nexActive +'px)');
  }, 400)
  changeIndicatorActive(curActive, nexActive)
}

function SlideRight(curActive, nexActive) {
  let clone = $('.slide-item:first').clone();
  $('.slide-item:last').after(clone);
  setTimeout(function () {
    carousel.addClass('transition');
    carousel.css('transform', 'translateX('+ -(slideWidth*length) +'px)');
  })
  setTimeout(function () {
    carousel.removeClass('transition')
    $('.slide-item:last').remove();
    carousel.css('transform', 'translateX('+ -slideWidth*nexActive +'px)');
  }, 400)
  changeIndicatorActive(curActive, nexActive)
}




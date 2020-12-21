let current = 0;
$(function(){
  let length = document.querySelectorAll('#bxslider .slide-inner .slide-item').length;
  let htmlSLideIndicators = ``;
  for(let i=0 ; i<length ; i++){
    htmlSLideIndicators+=`<li data-target="#bxslider" data-slide-to="${i}"${i===current ? ' class="active"': ''}></li>`;
  }
  let ol = document.createElement('ol');
  ol.className = 'slide-indicators';
  ol.innerHTML = htmlSLideIndicators;
  document.querySelector('#bxslider').appendChild(ol);
  $('.slide-indicators li').click(function(){
    let data = $(this).data('slideTo');
    onSlideTo(current,data);
  });
  $('a[href="#bxslider"').click(function(){
    let data = $(this).data('slide');
    let length = document.querySelectorAll('#bxslider .slide-inner .slide-item').length;
    if(data === 'next'){
      let next = current+1;
      if(next === length) next=0;
      onSlideTo(current,next);
    }
    else{
      let prev = current-1;
      if(prev < 0) prev=length-1;
      onSlideTo(current,prev);
    }
  });
});
function onSlideTo(curActive, nexActive){
  var jcurrent = $(document.querySelectorAll('#bxslider .slide-inner .slide-item')[curActive]);
  var jnext = $(document.querySelectorAll('#bxslider .slide-inner .slide-item')[nexActive]);
  
  var jIndicatorCurrent = $(document.querySelectorAll('.slide-indicators li')[curActive]);
  var jIndicatorNext = $(document.querySelectorAll('.slide-indicators li')[nexActive]);
  
  jcurrent.removeClass('active');
  jnext.addClass('active');
  jIndicatorCurrent.removeClass('active');
  jIndicatorNext.addClass('active');
  current = nexActive;
}



$(document).ready(function() {
  var $timer = $('.timer'),
      $minutes = $timer.find('.minutes'),
      $seconds = $timer.find('.seconds'),
      $timerControls = $('.timer-controls'),
      $start = $timerControls.find('.start'),
      $stop = $timerControls.find('.stop'),
      $clear = $timerControls.find('.clear'),
      counter = 0,
      min = 0,
      sec = 0,
      h = 0,
      interval;
  function init() {
    $minutes.text('00');
    $seconds.text('00');
  }
  function startTimer() {
    interval = setInterval(function(){
      counter += 1;
      min = Math.floor(counter / 60);
      sec = counter - min * 60;
      updateTimer();
    },1000);
    $start.attr('disabled','disabled');
  }
  function updateField($field,unit) {
    $field.text(unit.toString().length < 2 ? ('0' + unit.toString()) : unit);
    //console.log(unit.toString() + ' changed');
  }
  function updateTimer() {
    updateField($seconds,sec);
    if (Number($minutes.text()) !== min)
      updateField($minutes,min);
  }
  $start.on('click',function() {
    clearInterval(interval);
    startTimer();
  });
  $stop.on('click',function() {
    $start.removeAttr('disabled');
    clearInterval(interval);
  });
  $clear.on('click',function() {
    counter = 0;
    sec = 0;
    min = 0;
    h = 0;
    $start.removeAttr('disabled');
    clearInterval(interval);
    updateTimer();
  });
  
  init();
});
const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('2018-04-22T11:30:00').getTime(),
  x = setInterval(function() {

    let now = new Date().getTime(),
        distance = countDown - now;
    
    //do something later when date is reached
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById('countdownText').style.display='none',
      document.getElementById('countdownExpired').style.display='block',
      document.getElementById('countdownExpired').innerHTML="JUST MARRIED!";
    }
    else {
      document.getElementById('countdownText').style.display='block',
      document.getElementById('countdownExpired').style.display='none',
      document.getElementById('days').innerHTML = Math.floor(distance / (day)),
      document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);

    }
  }, second)

function giftModal(giftId) {
  document.getElementById('idGift').style.display='block';
  document.getElementById('giftName').innerHTML=document.getElementById(giftId).textContent;
  document.getElementById('giftNameSmall').innerHTML=document.getElementById(giftId).textContent;

}

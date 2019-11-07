
// function stimer() {//clock
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('te').innerHTML =h + ":" + m + ":" + s;
//     var t = setTimeout(stimer, 500);
//     }
// function checkTime(i) { //to add zero in front of no.s less than 10
//       if (i < 10) {
//         i = "0" + i
//       };
//       return i;
//       }

      $(' a').on('click', function(e) {//icons with ajax
         e.preventDefault();
         var url = this.href;
         $(' a.current').removeClass('current');
         $(this).addClass('current');
         $('#container').remove();
         $('#content').load(url + ' #container').hide().fadeIn('slow');
       });
    //hiding the messages
 function print1() {
    document.getElementById('ak').style.visibility="visible";
    }
 function print2() {
   document.getElementById('ri').style.visibility="visible";
    }
 function print3() {
   document.getElementById('sh').style.visibility="visible";
    }

//music player
  var x = document.getElementById("sound");
  function pla() {//to play
       x.play();
      document.getElementById("p1").innerHTML="Azhalinte";
      }
  function pau() {
    x.pause();//to pause
      }

 function nex() {
   // x.currentTime=0;
   var y=document.getElementById("cen");
   document.getElementById("p1").innerHTML="Centuries";
   y.play();
   }
//stopwatch
var h2 = document.getElementsByTagName('h2')[0];
var  start = document.getElementById('start');
 var  stop = document.getElementById('stop');
 var  reset = document.getElementById('reset');
 var seconds = 0, minutes = 0, hours = 0,t;

function add() {
   seconds++;
   if (seconds >= 60) {
       seconds = 0;
       minutes++;
       if (minutes >= 60) {
           minutes = 0;
           hours++;
       }
   }

//h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
document.getElementById('st').innerHTML=hours+":"+minutes+":"+seconds;
timer();
}
function timer() {
   t =window.setInterval(add, 1000);
}

 function  stop() {
   window.clearInterval(t);
}
function reset() {
  document.getElementById('st').innerHTML="00:00:00";
}

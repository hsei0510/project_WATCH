function clock() {
  const elem = document.getElementById("clock");
  let date = new Date();
  let years = date.getFullYear(); // 의문1: getYear()하면 122로 표현되는데 왜지?
  let month = date.getMonth();
  let clockDate = date.getDate();
  let day = date.getDay();
  let week = ['SON', 'MON', 'TUE', 'WEN', 'THU', 'FRI', 'SAT'];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let inputH, inputM, inputS, inputMonth, inputclockDate;
  inputMonth = checkTime(month+1);
  inputclockDate = checkTime(clockDate);
  inputH = checkTime(hours);
  inputM = checkTime(minutes);
  inputS = checkTime(seconds);

  elem.innerHTML = (`TODAY ${years} ${inputMonth} / ${inputclockDate} ${week[day]} \n ${inputH}:${inputM}:${inputS}`); // 의문2: \n했는데 왜 띄어쓰기가 안될까??
  // `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
  setInterval(clock, 1000);
};

//의문 : 시계에 문제있는것 같음, 계속 틀어놓으면 Out of Memory 오류남, 왜지?
//의문 : 폰트 때문인지 숫자가 바뀔때마다 글씨가 들썩들썩 움직, 왜지? 폰트때문인가?

// function init(){
// clock();
// setInterval(clock, 1000);
// }
// init();

function checkTime(i){
  if( i < 10 ){
    i = "0" + i;
  }
  return i;
}
clock();





//배경 돌리기 ( jquery-1.12.3.js 이용하여!)
var n=0;
var pos=0;
setInterval(function(){
  n=n+1;
  pos=-n*1078;
  $(".imgs").animate({top:pos},800,function(){
    if(n==6){
      n=0;
      pos=0;
      $(".imgs").css({top:pos});
      };
    });
  },3000);

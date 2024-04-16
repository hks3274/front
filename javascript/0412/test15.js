//test15.js
//날짜함수 연습
'use strict'

let str = '';

//오늘날짜... Date()
const today = new Date();
const year = today.getFullYear();
str += "오늘 연도는 " + year + "년<br/>";

const month = today.getMonth() + 1;
str += "오늘 월은 " + month + "월<br/>";

const date = today.getDate();
str += "오늘 월은 " + date + "일<br/>";

const hour = today.getHours();
str += "현재 시간은 " +hour +"시<br/>"

const minute = today.getMinutes();
str += "현재 분은 " + minute +"분<br/>"

const second = today.getSeconds();
str += "현재 초은 " + second +"초<br/>"

const yymmdd = year + "-" + month + "-" + date  + " " + hour + ":" +minute +":"+second
str += "오늘 날짜/시간 : " + yymmdd + "<hr/>"

let weekStr = ['일','월', '화', '수', '목', '금', '토']
let weekDay = today.getDay(); //요일
str += "오늘 요일 : " + weekStr[weekDay] + "요일<hr/>";

let lastdate = new Date(2024, 4, 0);
str += "이번달 마지막 일자는 " + lastdate.getDate() +"<br/>";

demo.innerHTML = `<font size = '3'><b>${str}<b/></font>`;

function detaCheck() {
    let checkYear = document.getElementById("yy").value;
    let checkMonth = document.getElementById("mm").value;

    let lastdate = new Date(checkYear, checkMonth, 0);
    
    
    demo.innerHTML = `<font size = '3'><b>${str}<b/></font>${checkYear}년 ${checkMonth}월의 마지막 일자는 ${lastdate.getDate()}일 입니다`;
}

function reload() {
    location.reload();
}



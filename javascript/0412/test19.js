'use strict'

function regexCheck(){
    // 정규식 표현변수를 미리 만들어 놓고 수핸한다.
    const regex1 = /atom/gm; //'atom'이라는 문자열이 포함되어 있으면 'true', 아니면 'false' 반환   
    const regex2 = /mbc|kbs|sbs|cjb/g; //mbc또는kbs또는sbs또는cjb 문자열을 포함하고 있느냐..
    const regex3 = /홍길(동|순)/g; //홍길(동|순)문자열을 포함하고 있느냐..
    const regex4 = /[a-z]/g; //영문소문자 포함?
    const regex5 = /[A-Z]/g; //영문대문자 포함?
    const regex6 = /[가-힣]/g; //영문대문자 포함?
    const regex7 = /[^a-z]/g; //영문소문자만 포함하고 있는가?
    const regex8 = /[^a-zA-Z0-9]/g; //영문대/소문자 숫자 포함?
    const regex9= /[^a-zA-Z가-힣]/g; //영문대/소문자 한글 포함?
    const regex10= /[^a-zA-Zㄱ-ㅎ]/g; //영문대/소문자 한글 포함?
    const regex11= /[^a-zA-Zㄱ-ㅎ가-힣]/g; //영문대/소문자 한글 포함?
    const regex12 = /[^a-zA-Z0-9_-]/g; //영문대/소문자 숫자,_,- 포함?
    const regex13 = /[^a-zA-Z0-9_-]/g; //영문대/소문자 숫자,_,-,.을 포함?
    

    const regex21 = /\./g; //.을 포함?
    const regex22 = /\d/g; //숫자을 포함?
    const regex23 = /\D/g; //숫자 포함하지 않는가?
    const regex24 = /\w/g; //영문자/숫자/_포함하고 있는가?
    const regex25= /\W/g; //영문자/숫자/_ 제외한 것을 포함하고있느냐?
    const regex26= /\s/g; //공백(탭문자 포함)포함하고 있지 않는가?

    let content = document.getElementById("content").value.trim();

    if(content == ""){
        alert("문자열을 입력하세요");
        return false;
    } 

    // if (!content.match(regex1)) {
    //     alert("본문에 'atom'문자열을 포함하고 있지 않습니다");
    // }
    // if(!content.match(regex2)){alert("본문에 mbc또는kbs또는sbs또는cjb 문자열을 포함하고 있지 않습니다");}
    // if(!content.match(regex3)){alert("본문에 홍길(동|순) 문자열을 포함하고 있지 않습니다");}
    // if(!content.match(regex4)){alert("본문에 영문소문자를 포함하고 있지않습니다");}
    // if(!content.match(regex5)){alert("본문에 영문대문자를 포함하고 있지않습니다");}
    // if(!content.match(regex6)){alert("본문에 한글을 포함하고 있지않습니다");}
    // if(content.match(regex7)){alert("본문에 영문소문자가 아닌 다른 문자를 포함하고 있습니다.");}
    // if(content.match(regex8)){alert("본문에 영문대/소문자 숫자가 아닌 다른 문자를 포함하고 있습니다.");}
    // if(content.match(regex9)){alert("본문에 영문대/소문자 한글이 아닌 다른 문자를 포함하고 있습니다.");}
    // if(content.match(regex10)){alert("본문에 영문대/소문자 한글이 아닌 다른 문자를 포함하고 있습니다.");}
    // if(content.match(regex11)){alert("본문에 영문대/소문자 한글이 아닌 다른 문자를 포함하고 있습니다.");}
    // if(content.match(regex12)){alert("본문에 영문대/소문자 한글이 아닌 다른 문자를 포함하고 있습니다.");}
    // if(!content.match(regex21)){alert("본문에 '.'를 포함하고 있지 않습니다.");}
    // if(!content.match(regex22)){alert("본문에 숫자를 포함하고 있지 않습니다.");}
    // if(content.match(regex23)){alert("본문에 숫자를 포함하고 있지 않습니다.");}
    // if(!content.match(regex24)){alert("본문에 영문숫자밑줄(_)를 포함하고 있지 않습니다.");}
    // if(content.match(regex25)){alert("본문에 영문숫자밑줄(_)를 포함하고 있지 않습니다.");}
    if(!regex26.test(content)){alert("본문에공백(탭문자 포함)포함하고 있지 않습니다.");}
    else {
        alert("자료가 잘 입력되었습니다. 통과~~~")
        //location.href = "서버로 전송... url? 변수=값&변수2=값2....."; // get방식 => 변수 값을 이어붙여서 보냄 .jsp? 변수=값 & 변수=값 이렇게 보냄
        //myform.submit(); // post 방식 => name이라는 변수에 담아서 한꺼번에 서버로 보냄
    }
    document.getElementById("content").focus();

}
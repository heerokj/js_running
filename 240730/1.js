// 1. Promise 다뤄보기

const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
    setTimeout(function(){
        if(url === API_URL){
            console.log("성공")
        }else{
            console.log("실패")
        }
    }, 3000)
}

//then과 catch를 이용하여 데이터를 처리하는 방법과 에러를 처리하는 방법 두 가지를 각각 보여주세요.

fetch(url)
.then((response) => response.json())
.catch((reason) => console.log("reason", reason))

// getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.

getData(API_URL);
getData(WRONG_URL);
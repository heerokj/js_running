// 2. Async / Await 다뤄보기
//위 1번 문제에서 다루었던 비동기 처리를 async, await 키워드를 사용하여 코드를 수정해서 작성해주세요.

const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function time(ti){
    return new Promise(resolve => setTimeout(resolve, ti));
}

async function getData(url){
    await time(3000);
    if(url === API_URL){
        console.log("성공")
    }else{
        console.log("실패")
    }
}

getData(API_URL);
getData(WRONG_URL);
// 5. [선택 문제] 가장 먼저 완료된 비동기 함수를 찾아라.

function taskA() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task A Complete");
        }, time);
    });
}

function taskB() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task B Complete");
        }, time);
    });
}

function taskC() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task C Complete");
        }, time);
    });
}

//가장 먼저 완료된 작업의 결과를 반환하는 findFirstCompletedTask라는 함수를 작성하세요.

async function findFirstCompletedTask(){
    try {
        // 병렬로 promise들을 한 번에 처리하는 코드
        const results = await Promise.all([taskA(), taskB(), taskC()])

        for(let i = 0; i < results.length; i++ ){
          console.log(results[0])
        }
        // results.forEach((result) => console.log(result[0]));
      } catch (error) {
        console.error("Error:", error);
      }

}


// 함수 호출
findFirstCompletedTask();
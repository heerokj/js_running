// 5. [선택 문제] 가장 먼저 완료된 비동기 함수를 찾아라.
// Promise.race() 

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
Promise.race([taskA(), taskB(), taskC()]).then((result) => console.log(result));

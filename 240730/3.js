//3. PromiseAll 다뤄보기 (빈칸 채우기)

function task1() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 1 Complete");
      }, 1000);
    });
  }
  
  function task2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 2 Complete");
      }, 2000);
    });
  }
  
  function task3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 3 Complete");
      }, 3000);
    });
  }
  
  async function runTasksSequential() {
    console.time("Sequential");
    try {
      const result1 = await task1();
      console.log(result1);
      const result2 = await task2();
      console.log(result2);
      const result3 = await task3();
      console.log(result3);
    } catch (error) {
      console.error("Error:", error);
    }
    console.timeEnd("Sequential");
  
    // 예상되는 대략적인 시간과 그 이유 
    // < 6초, 
    //이유 :  runTasksSequential() 함수가 실행되면 순차적으로 task1(), task2(), task3()이 실행된다. task1()함수는 1초 뒤 "Task 1 Complete" 를 promise데이터 타입으로 반환(???), task2()함수는 2초뒤, task3()함수는 3초뒤 반환하여 총 6초정도 걸린다. >
  }
  
  async function runTasksParallel() {
    console.time("Parallel");
    try {
      // 병렬로 promise들을 한 번에 처리하는 코드
      const results = await Promise.all([task1(), task2(), task3()])
      results.forEach((result) => console.log(result));
    } catch (error) {
      console.error("Error:", error);
    }
    console.timeEnd("Parallel");
    // 예상되는 대략적인 시간과 그 이유 
    // < 3초.
    // 이유 :  Promise.all()은 이전 요청이 완료되는 것을 기다리지 않고 비동기적으로 병렬로 작업을 실행하여 3초가 걸린다.>
  }
  
  // 함수 호출
  runTasksSequential().then(() => runTasksParallel());
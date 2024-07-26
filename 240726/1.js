//1. 빈칸 채우기 문제

// 아래 내용에서 빈 칸에 들어갈 항목들을 채워주시고 
// 왜 그렇게 생각했는지 본인의 생각을 간단하게 1줄 정도 같이 적어주세요.

//1.
let uninitialized;
console.log(uninitialized); // 결과값 < undefined >
// 선언과 동시에 undefined 할당 된다.

//2. 
const apple = "사과";
//apple = "바나나"; // TypeError: Assignment to constant variable
// const는 선언과 재할당을 할 수 없다.

//3.
let lotto = [3, 8, 13, 19, 21, 32];
console.log(lotto[3]); // 결과값 < 19 >
// 배열요소는 배열명[인덱스] 로 얻을 수 있고, 배열 인덱스는 0부터 시작한다.

//4.
let mySchedule = "";
console.log(mySchedule || false); // < false >
// mySchedule은 null이며 null은 false가 나온다. 
// 논리연산자(||)는 어느 하나가 true이면 true라는 결과가 나오는데 , 둘다 false이므로 결과값은 false이다.
console.log(!!mySchedule); // < false >
// 논리연산자는 ! 는 NOT의 의미이다. 따라서 false의 반대의 반대 이므로 결과는 false이다.


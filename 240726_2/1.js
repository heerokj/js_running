// 1. 얕은 복사

// 1.
const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2[0] = 10;
console.log(arr1); // [10, 2, 3] 출력
// 배열은 참조객체로 주소값을 참조하고 있다.
// 따라서 배열 arr2을 배열 arr1 로 할당할때 배열 arr1가 참조하고 있는 주소값이 복사되어 같은 주소값을 바라보고 있다. 
// 따라서 arr2의 속성이 수정되면 같은 주소값을 참조하고 있는 arr1의 속성도 변경된다.
console.log(arr1 === arr2); // true 출력 =>  같은 주소값을 참조하여 true


var copyObject = function (object){
  var result2 = {}
  for(i in object){
    result2[i] = object[i]
  }
  return result2
}

// 2.
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = copyObject(obj1); // obj1을 얕은 복사하는 코드로 작성해주세요

/* obj2에 d를 추가하는 코드를 작성해주세요. d는 4의 값을 가집니다. */
obj2.d = 4;
/* 해당값 obj1, obj2의 값을 출력해주세요 */
console.log(obj1);
console.log(obj2);
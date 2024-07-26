// 3.얕은 , 깊은 복사

const student = {
    name: "yuno",
    age: "30",
    skill: ["javascript"],
    address: {
    city: "seoul"
    }
};
  
var copyObject = function (object){
    var result2 = {}
    for(i in object){
      result2[i] = object[i]
    }
    return result2
  }
  

  // 얕은 복사를 수행하여 shallowCopy를 만들어주세요.
  const shallowCopy = student;

  // 깊은 복사를 수행하여 deepCopy를 만들어주세요.   //??? 배열복사는??
  const deepCopy = copyObject(student);
  deepCopy.address = copyObject(student.address);
  //const deepCopy = structuredClone(student); //재상튜터님이 설명 **

  
  // 얕은 복사 객체와 원본 객체를 비교하여 출력해주세요
  console.log("1. 원본 객체(student)와 얕은 복사 객체가 같을까요?", student === shallowCopy ); //true
  
  // 얕은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
  console.log("2. 원본 객체의 address와 얕은 복사 객체의 address가 같을까요?", student.address === shallowCopy.address); //true
  
  // 깊은 복사 객체와 원본 객체를 비교하여 출력해주세요.
  console.log("3. 원본 객체(student)와 깊은 복사 객체가 같을까요?", student === deepCopy); //false
  
  // 깊은 복사 객체의 address와 원본 객체의 address를 비교하여 출력해주세요.
  console.log("4. 원본 객체의 address와 깊은 복사 객체의 address가 같을까요?", student.address === deepCopy.address); //false
  
  
  2.
  // 동일한 student로 진행합니다. 
  
  // 얕은 복사한 객체에 배열요소 변경 javascript -> js으로 변경해주세요 
  shallowCopy.skill[0] = "js"

  // 깊은 복사 객체의 주소 속성을 변경하세요 (예: city를 "busan"으로 변경)
  deepCopy.address.city = "busan";

  // 결과 확인 
  console.log("5. 원본 객체(student):", student); 
  console.log("6. 얕은 복사된 객체(shallowCopy):", shallowCopy); 
  console.log("7. 깊은 복사된 객체(deepCopy):", deepCopy);
  
  /* 1~7번까지 출력값을 출력해보고 적어주세요
  예 ) 1. true 
      2. true
      3. false
      4. false
      5. {
          name: 'yuno',
          age: '30',
          skill: [ 'js' ],
          address: { city: 'seoul' }
        }
      6. {
          name: 'yuno',
          age: '30',
          skill: [ 'js' ],
          address: { city: 'seoul' }
        }
      7. {
          name: 'yuno',
          age: '30',
          skill: [ 'js' ],
          address: { city: 'busan' }
        }
  */
  
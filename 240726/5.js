// 5. 점수 수정하기 [선택 문제]

// 학교에서 시험을 보았는데 전산 문제로 한 문제의 답이 전부 오답처리가 된 바람에 학생들의 점수를 전부 3점씩 올려주어야 합니다.
// scores에 있는 학생들의 점수를 반복문을 통해 3점씩 올리게 고쳐주시는데 4번 문제를 통해 만든 계산기 함수를 통해 더해주세요.

const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function plusScore(scores) {
    // 4번 문제의 계산기 함수를 활용한 코드를 작성해주세요.
    let newScores = [];
    for(let i = 0; i < scores.length; i++ ){
        val = calculator(scores[i], "+", 3);
        //console.log(val); // 계산한 값들 
        newScores.push(val);
        scores[i] = newScores[i]
    }
} 

plusScore(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]


function calculator(num1, Operator, num2) {
    // 코드를 작성해주세요.
    if(Operator === "+"){
        return num1 + num2;
    }else if(Operator === "-"){
        return num1 - num2;
    }else if(Operator === "*"){
        return num1 * num2;
    }else if(Operator === "/"){
        return num1 / num2;
    }
}
export const compute = (DNA1,DNA2) => {

    // 다른 부분 측정할 변수 선언 (초기값은 0으로 지정)
    let Hamming_distance=0;

    // 둘 다 빈 값일 때, 둘이 완전히 똑같을 때는 0을 반환
    if(DNA1.length === 0 && DNA2.length === 0){
        return Hamming_distance;
    }

    // 첫번째 매개변수가 빈 값일 때
    if(DNA1.length === 0){
        throw new Error('left strand must not be empty');
    }
    // 두번째 매개변수가 빈 값일 때
    if(DNA2.length === 0){
        throw new Error('right strand must not be empty');
    }

    // 두 매개변수의 길이가 다를 때
    if(DNA1.length !== DNA2.length){
        throw new Error('left and right strands must be of equal length');
    }

    // 길이가 똑같을 때, 다른 인덱스값을 찾게되면 + 하는 방식
    for(var i = 0; i < DNA1.length; i++){
        if(DNA1[i] !== DNA2[i]){
            Hamming_distance++;
        }
    }
    return Hamming_distance;
};

export const transform = (object) => {
    // 빈 객체를 생성
    let transformed = {};
    // 주어진 객체를 key 값의 개수만큼 반복문 돌리기
    for(let key in object){
        // key에 해당하는 value 변수선언
        let value = object[key];
        // item 변수 선언
        let item;
        // item 변수에 value 배열을 담고 요소를 순서대로 뽑아내서 담음.
        for(let j=0; item = value[j]; j++){
            transformed[item.toLowerCase()] = parseInt(key);
        }
    }

    return transformed;

};

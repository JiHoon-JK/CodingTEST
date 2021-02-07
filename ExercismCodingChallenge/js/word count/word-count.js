const regex = /(\d+)|(\b[\w']+\b)/g;

export const countWords = (stringWords) => {
    // 반환할 객체 생성
    var expectedObject = {};
    // 소문자로 변형
    var lowerPhrase = stringWords.toLowerCase();
    // regex와 매칭시키는 stringWords 만들기
    var wordsArray = lowerPhrase.match(regex);

    wordsArray.forEach(function(word){
        // 해당 단어가 객체에 있는 단어라면
        if(expectedObject[word]){
            expectedObject[word] += 1;
        }
        else{
            expectedObject[word] = 1;
        }
    })
    return expectedObject;
}





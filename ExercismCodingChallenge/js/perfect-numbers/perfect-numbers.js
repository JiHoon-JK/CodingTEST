
export const classify = (num) => {
  // num이 0보다 작을 때 오류를 반환함.
  if(num <= 0){
    throw new Error('Classification is only possible for natural numbers.');
  }

  // num 을 나눌 수 있는 숫자들을 담은 배열 : factors
  var factors = [];
  // for문을 돌려서 나눠지는 값을 factors에 담음.
  for(let i = 0; i < num; i++){
    if(num % i === 0){
        factors.push(i);
    }
  }

  // reduce() 메소드를 통해서 factors 배열안에 값을 모두 더한 값을 factors에 담는다.
  var factors_Sum = factors.reduce(function(a,b){return a+b;},0);

  // factors_Sum의 합이 num의 합과 같을 때
  if(factors_Sum === num){
    return 'perfect';
  }
  // factors_Sum의 합이 num의 합보다 클 때
  else if(factors_Sum > num){
    return 'abundant';
  }
  // factors_Sum의 합이 num의 합보자 작을 때
  else{
    return 'deficienct';
  }
};

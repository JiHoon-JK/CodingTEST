export class Squares {
  constructor(num) {
    this.num = num;
  }

  // 제곱의 합
  get sumOfSquares() {
    let sum = 0;

    for (let i = 1; i <= this.num; i++){
        sum += i** 2;
    }

    return sum;
  }

  // 합의 총합의 제곱
  get squareOfSum() {
    let sum = 0;

    for (let i = 1; i <= this.num; i++){
      sum += i;
    }
    return sum** 2;
  }

  // 합의 제곱 - 제곱의 합
  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}

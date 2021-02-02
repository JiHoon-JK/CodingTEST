export class Triangle {
  constructor(num1,num2,num3) {
    this.num_array = [num1,num2,num3];
    // 오름차순 정렬
    this.num_array_sort = this.num_array.sort(function(a,b){
        return a-b;
    })

    // 모든 길이가 0보다는 커야함.
    // 두 변의 길이의 합이 한 변의 길이보다 작으면, false 반환.
    if( num1 > 0 && num2 > 0 && num3 > 0  && this.num_array_sort[0] + this.num_array[1] <= this.num_array_sort[2]){
        return false;
    }
  }

  get isEquilateral() {
    // 모든 변의 길이가 같은 경우
    if(this.num_array_sort[0] === this.num_array_sort[1] && this.num_array_sort[1] === this.num_array_sort[2]){
        return true;
    }
  }

  get isIsosceles() {
    // 두 변의 길이가 같은 경우
    if(this.num_array_sort[0] === this.num_array_sort[1] || this.num_array_sort[1] === this.num_array_sort[2]){
        return true;
    }
  }

  get isScalene() {
    // 모든 변의 길이가 각각 다른 삼각형
    if(this.num_array_sort[0] !== this.num_array_sort[1] && this.num_array_sort[1] !== this.num_array_sort[2] && this.num_array_sort[0] !== this.num_array_sort[2]){
        return true;
    }
  }
}

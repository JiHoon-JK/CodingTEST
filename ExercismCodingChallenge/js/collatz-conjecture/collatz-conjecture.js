export const steps = (num) => {
    var step = 0;
    if(num<0){
        throw new Error('Only positive numbers are allowed');
    }
    while (num !== 1){
        if(num % 2 === 0){
            num = num/2;
            step++;
        }else{
            num = num * 3  + 1;
            step++;
        }
    }
    return step;
};

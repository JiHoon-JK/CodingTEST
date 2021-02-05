export const convert = (num) => {
    let string = '';
    if(num % 3 === 0){
        string += 'Pling';
    }
    else if(num % 5 === 0){
        string += 'Plang';
    }
    else if(num % 7 === 0){
        string += 'Plong';
    }
    else{
        string += String(num);
    }
    return string;
};

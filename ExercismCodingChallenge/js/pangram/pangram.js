// alphabet_array
const alphabet_array = ['a','b','c','d','e','f','g','h','i','j','k','l','m,','n','o','p','q','r','s','t','u','v','w','x','y','z'];

export const isPangram = (string) => {
    // convert the given string to lowercase
    const lower_string = string.toLowerCase();

    // if it is an empty string, it returns false.
    if(lower_string == ""){
        return false;
    }
    // check is return value.
    let check = true;
    // if lower_string is in alphabet_array, change check to false and return.
    for(let i=0; i < alphabet_array.length; i++){
        if(lower_string.includes(alphabet_array[i]) === false){
        check = false;
        }
        return check
    };
};

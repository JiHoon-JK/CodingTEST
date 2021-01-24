//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = ([color1, color2]) => {
    const num_check = (color) => COLORS.indexOf(color);
    return num_check(color1)*10 + num_check(color2);
};

export const COLORS = [
'black',
'brown',
'red',
'orange',
'yellow',
'green',
'blue',
'violet',
'grey',
'white'
];
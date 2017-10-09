var array = [undefined, '1.2a', 2, 1];
var min_num,
    max_num,
    sum = 0,
    counter,
    type_num;

for (counter = 0; counter < array.length; counter++) {
    type_num = typeof array[counter];
    if ((type_num === 'number') && (!isNaN(array[counter]))) {
        min_num = array[counter];
        max_num = array[counter];
        break;
    }
}
for (counter = 0; counter < array.length; counter++) {
    type_num = typeof array[counter];
    if ((type_num === 'number') && (!isNaN(array[counter]))) {
        sum += array[counter];
        if (min_num > array[counter]) {
            min_num = array[counter];
        }
        if (max_num < array[counter]) {
            max_num = array[counter];
        }
    }
}
console.log('sum = ', sum);
console.log('min = ', min_num);
console.log('max = ', max_num);
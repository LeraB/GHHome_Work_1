var array = [3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1];
var min_num = array[0],max_num = array[0], sum = 0,counter, type_num ;

for(counter = 0; counter < array.length; counter++){

    type_num = typeof array[counter];
    if(( type_num === 'number' )&&(!isNaN(array[counter]))){
            sum += array[counter];

            if (min_num > array[counter]){
               min_num =  array[counter];
            }
        if (max_num < array[counter]){
            max_num =  array[counter];
        }
    }
}
console.log('sum = ', sum);
console.log('min = ', min_num);
console.log('max = ', max_num);

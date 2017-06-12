var array = [];
array.push(1);
array.push(2);
array.push(3);
array.push(5);

console.log('Original array:');
console.log(array);

console.log();
console.log('Traditional for:');
for(var i = 0; i < array.length ; i++){
    console.log(array[i]);
}

console.log();
console.log('Kind a foreach:');
for(var i in array){
    console.log(array[i]);
}

console.log();
console.log('POP:');
for(var i in array){
    console.log(array[i]);
    array.pop();
}
console.log();
console.log('What happened:');
console.log(array);

array = ['a','b','c','d'];

console.log();
console.log('ForEach:');
array.forEach(function(val,index){
    console.log(index,val);
});

var new_array = [1,2,3,4,5].map(function(val,index){
    return val % 2 == 0;
});
console.log();
console.log('Map ODDS:');
console.log(new_array);

var new_array = [1,2,3,4,5].map(function(val,index){
    return val++;
});
console.log();
console.log('Add 2:');
console.log(new_array);
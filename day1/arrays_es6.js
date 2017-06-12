var array = [1,2,3,4,5,6,7,8,9,10];

var new_array = array.filter(val => {
    return val % 2 == 0;
});
console.log();
console.log('ODDS:');
console.log(new_array);

console.log();
console.log('Reverse:');
console.log(new_array.reverse());

console.log();
console.log('Sort:');
new_array.sort()
console.log(new_array);

console.log();
console.log('Sort custom:');
new_array.sort((a,b)=>{ return Number(a) > Number(b) })
console.log(new_array);

var new_array = array.map((val,index) => {
    return val++;
});
console.log();
console.log('Add 2:');
console.log(new_array);
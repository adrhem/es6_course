var integer = 10;
var str = "Hello World";
var PI = 3.1415;
var boolean = false;
var arr = [10,12,13,'Hello',10.6,true];
var obj = {
    PI: PI,
    str: str,
    PI: PI,
    boolean: boolean,
    arr: arr,
    obj: {},
};

var my_function = function(int){
    int = int || 2;
    return int;
}

function  my_function2(){
    var a = 2017;
    return str + a;
}
console.log("Test console");
console.log("=============");
console.log(PI, str, PI, boolean);
console.log('This is concat: ' + str + ' ' + PI);
console.log(arr);
console.log(obj);
console.log(my_function());
console.log(my_function(PI));
console.log(my_function2());

console.log();
console.log("Expresions");
console.log("=============");
console.log(PI == '3.1415');
console.log(PI === '3.1415');
console.log(PI === 3.1415);

console.log();
console.log("Typeof");
console.log("=============");
console.log(typeof integer);
console.log(typeof str);
console.log(typeof PI);
console.log(typeof boolean);
console.log(typeof arr);
console.log(typeof obj);
console.log(typeof my_function);
console.log(typeof var_not_defined);
console.log(typeof null);
console.log(typeof my_function == 'function');



function hello(){
     let hii = "hello"
    console.log(hii)
}

    hello();

function sum(n1, n2){
    var result = n1 + n2;
    console.log(result);
}

sum(5, 7);

function multiply(num1, num2){
    var result = num1 * num2;
    console.log(result);
}

multiply(3, 4);
 var y = function(){
    var y = ()=>{}
    console.log("this is y")
}
y()
function callAnotherfn(anotherfn){
    console.log("this is the call another function function")
    anotherfn()
}
callAnotherfn(function(){
    console.log("this is the other fn")
})


for( let i = 0 ; i < 1 ; i++){
    var v = 70
    // let u = 9
    console.log(i);
}
// console.log(v)

// console.log(u)
// callAnotherfn()  => {}
    let counter = 5
    while(counter<=3){
        var z = 3;
        
        console.log("still in the while loop");
        counter ++;
    }
    console.log(z)
    



var arr = [100 , 200 ,300 ,400 , "name" , "eMAN"]
console.log(arr)
console.log(arr[3])
arr[5] = 900
console.log(arr.length)
arr.pop()
console.log(arr)
arr.push(40,50)
console.log(arr)

arr.splice(4,5,"string")

console.log(arr)

arr.shift()
console.log(arr)

arr.unshift(123)
console.log(arr)

arr1 = [10,20,30,20,40]
console.log(arr1.lastIndexOf())
console.log(arr1.lastIndexOf())

var miniArr = arr1.slice(2,5)
console.log(miniArr)

arr2 = [1,2,3,4]
arr3 = [9,8,7,0]
var merge = arr2.concat(arr3)
console.log(merge)

let arrstr = ["welcom" , "toy" , "and" , "joy"]
let str = arrstr . join   (",")    
console.log(str)

















// Problem 1 :
// Given an array find the unique items in the array
var arr=["ravan", "ram", "laxman", "ravan", "ravan", "bali","angad","bali"];
var obj={};
for (var i=0;i<=arr.length-1;i++){
    obj[arr[i]]=1
}

console.log(obj);
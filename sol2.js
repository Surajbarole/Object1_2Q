// Problem 2 :
// Given a string print, the number of times each character appears

let str=[7,2,7,7,3,4,2];
let obj={};
for(let i=0;i<str.length;i++){
  if(obj[str[i]]==undefined){
  obj[str[i]]=1;
  }else {
    obj[str[i]]++
  }
}
console.log(obj)
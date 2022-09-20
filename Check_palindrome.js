
let str="aman";
function palindrome(str){

  let bag="";
  for(i=str.length-1;i>=0;i--){
    bag+=str[i]
  }
  return bag
}

let rev_str=palindrome(str)
if(bag==str){
    console.log("Yes Palindrome")
  }else{
    console.log("No Palindrome")
  }
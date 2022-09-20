function CheckPrime(num){

for(i=0;i<=num;i++){
      if(num%i==0){
      count++
     }
}

if(count==2){
  return true;
  }else{
    return false;
  }
}

let res = checkPrime(13)

console.log(res)

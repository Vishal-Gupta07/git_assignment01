function CheckPrime(num){

let count=0;
for(i=0;i<=num;i++){
      if(num%i==0){
      count++
     }

  if(count==2){
    return true;
     }
      return false;
  	
	
}



let res = checkPrime(13)

if(res=true){
console.log("Prime");
}else{
console.log("Not Prime")
}

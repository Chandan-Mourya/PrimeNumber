function identifyPrime(num) {
    // Write code here
let flag=true;
    for(let i=2; i<num; i++){
        if(num%i==0){
            flag=false;
            break;
        }
    }
    if(flag==true){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
    
}
identifyPrime(13)
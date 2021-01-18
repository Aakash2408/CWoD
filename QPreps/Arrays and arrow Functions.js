let modify = (array) => {
    for(let i=0;i<array.length;i++){
        if(array[i]===0)
            array[i]=0;
        else if(checkPrime(array[i])==true)
            array[i]=array[i]+1;
        else{
            array[i]=array[i]*2;
        }
    }
        return array;
    }
const checkPrime=(n)=>{
if(n<=3){
    return true;
}
else{
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0)
        return false;
    }
    return true;
}
}
  


module.exports = modify;
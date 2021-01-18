function errorHandler(x) {
    try{
       return getX(x);
    }
    catch(Error){
        return "Error";
    }
    
    }
    
    function getX(x) {
        if(x == 5) {
            return new Error("Error Occured");
        }
        return x;
    }
    
    
    
    module.exports = errorHandler;
module.exports = function(){
    var totalLength = 256;     
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var generatedString = "";  
    var index = 0;
    while(index < totalLength){
        generatedString += possible.charAt(Math.floor(Math.random() * possible.length));
        index++;               
    }
                            
    return generatedString;    
};

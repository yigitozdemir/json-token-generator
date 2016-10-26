module.exports = function(length){
    var totalLength = length;     
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var generatedString = "";  
    var index = 0;
    while(index < totalLength){
        generatedString += possible.charAt(Math.floor(Math.random() * possible.length));
        index++;               
    }
                            
    return generatedString;    
};

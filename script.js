function add7(number) {
    var add = number + 7;
    return add;
}

function input(){
    
    var userInput= prompt('Te rog adauga un numar: ');
    userInput = parseInt(userInput);
    //console.log(typeof(userInput));
    //console.log(isNaN(userInput));
    
    
    if (isNaN(userInput)){
        return -1;
    }
    else{
        return userInput;
        
    }
    
}

var resultat =input();

if(resultat === -1){
    alert('Nu putem lucra cu string');
}
else{
    alert('Rezultatul adunarii cu 7 este: '+add7(resultat));
}
const TAX_RATE =0.08;
const PHONE_PRICE =400;
const ACCESSORY_PRICE=9.99;
const SPENDING = 1750;

function calcTax(price){
    return price+(price*TAX_RATE);
}

function format(x){
    
   return "$"+x.toFixed(2);
}


let remainingMoney =SPENDING;
let totalCost =0;
let phones=0;
let accesory=0;

while(remainingMoney > 0){
        if (PHONE_PRICE<remainingMoney){
            console.log("You bought a phone !" );
            totalCost+=calcTax(PHONE_PRICE);
            remainingMoney-=calcTax(PHONE_PRICE);
            phones++;
            if(ACCESSORY_PRICE<remainingMoney){
                    console.log("You bought an accesory!" );
                    totalCost+=calcTax(ACCESSORY_PRICE);
                    remainingMoney-=calcTax(ACCESSORY_PRICE);
                    accesory++;
            }
          console.log("Total Cost:" + format(totalCost));

        }
        else{
 
            break;}
    }

           console.log('That was it, you afforded '+ phones+' phones and '+ accesory +' accesories');
           console.log('You\'re left with '+format(remainingMoney));

// refactor to use less code. 

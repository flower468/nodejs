/* 
function adder(num1, num2){
    return num1 + num2;
}; 
*/
/* 
let adder = function(num1, num2){
    return num1 + num2;
}; 
*/

/* 
let adder = (num1) => {
    return num1 + num1;
}; 
*/

/* 
let adder = (num1) => num1 + num1; 
*/

/* 
let adder = num1 => num1 + num1; 
*/

// let adder = (num1,num2) => {
//    let n1 = num1 || 0;
//    let n2 = num2 || 0;
//     return n1 + n2;
// }
// console.log(adder(5,6));


/* 
let shop = {
    price : 100,
    showCostPrice : function(){
        return this.price;
    },
    showSellingPrice : function(){
        let self = this;
        let calculateProfit = function(){
            return self.showCostPrice() * 0.2;
        }
        return this.showCostPrice() + calculateProfit();
    }
}; 
*/

/* let shop = {
    price : 100,
    showCostPrice : function(){
        return this.price;
    },
    showSellingPrice : function(){
        let calculateProfit = function(scope){
            return scope.showCostPrice() * 0.2;
        }
        return this.showCostPrice() + calculateProfit(this);
    }
}; */

/* 
let shop = {
    price : 100,
    showCostPrice : function(){
        return this.price;
    },
    showSellingPrice : function(){
        let calculateProfit = function(){
            return this.showCostPrice() * 0.2;
        }
        return this.showCostPrice() + calculateProfit.bind(this)();
    }
}; 
*/


let showCostPrice = function(){
    return 1000;
}
let name = "Global";
let shop = {
    name : "Shop",
    showCostPrice : function(){
        return 100;
    },
    showSellingPrice : function(){
        console.log(' inside showSellingPrice '+this.name);
        let calculateProfit = () => {
        console.log(' inside calculateProfit '+this.name);
            return this.showCostPrice() * 0.2;
        }
        return this.showCostPrice() + calculateProfit();
    }
};

console.log(shop.showSellingPrice()); 
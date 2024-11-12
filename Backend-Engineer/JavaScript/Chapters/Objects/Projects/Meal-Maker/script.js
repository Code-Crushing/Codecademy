const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck !== 'number' || priceToCheck > 0) {
            this._price = priceToCheck;
        }
    },
    get todaySpecial (){
        if(this._meal && this._price > 0){
            return `Today's special is ${this._meal} for ${this._price}$`
        } else {
            return 'Meal or price was not set correctly!';
        }
    }   
};


// Type chcking purposes
menu.meal = 'Pizza';

menu.price = 5;

console.log(menu.todaySpecial);




// testing th seters
// menu.meal = 20;

// console.log(menu.meal)

// menu.price = 0;
// console.log(menu._price)

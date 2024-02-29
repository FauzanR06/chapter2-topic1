let priceTotal = 1000000;
let discount = 25;
let total = 0;

function getTotal() {
  let totalDiscount = priceTotal * (discount / 100);

  // var total = priceTotal - totalDiscount;
  //local variable, make new variable in this function

  total = priceTotal - totalDiscount;
  console.log("total: ", total);
}

getTotal();
console.log("total: ", total);

// let and var are not same in the case

// let total = 1000000;
console.log("total: ", total);

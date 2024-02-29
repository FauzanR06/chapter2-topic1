const priceTotal = 1000000;
const discount = 25;
const total = 0;

function getTotal() {
  const totalDiscount = priceTotal * (discount / 100);

  // var total = priceTotal - totalDiscount;
  //local variable, make new variable in this function

  // total = priceTotal - totalDiscount;
  console.log("total: ", total);
}

getTotal();
console.log("total: ", total);

//

// total = 1000000; // can not change the const variable
console.log("total: ", total);

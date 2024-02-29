var priceTotal = 1000000;
var discount = 25;
var total = 0;

function getTotal() {
  var totalDiscount = priceTotal * (discount / 100);

  // var total = priceTotal - totalDiscount;
  //local variable, make new variable in this function

  total = priceTotal - totalDiscount;
  console.log("total: ", total);
}

getTotal();
console.log("total: ", total);

const cart =["shoes","pants","kurta"];

//callback hell
api.createOrder(cart, function(){
api.proceedToPayment()
})


//same by using promise
const promise=createOrder(cart);

promise.then(function(orderID){
    return proceedToPayment(orderID);
});


const GITHUB_API="https://...."
const user=fetch(GITHUB_API);

//another way of writing promises

createOrder(cart)
    .then((orderId) => proceedToPayment(orderID))
    .then((paymentInfo) => showOrderSummary(PaymentInfo))
    .then((orderId) => proceedToPayment(orderID))
 ;

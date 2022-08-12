import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new Payment('mario', 'plumbing', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// console.log(invOne.format() , invTwo)
// let invoices : Invoice[] = []
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invoices)
// invoices.forEach(inv => {
//   inv.amount = 100000 ;
//   console.log(inv.client, /*inv.details, */ inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
//console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        console.log("Invoice");
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        console.log("Payment");
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});

import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
//console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        //     console.log("Invoice")
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        // console.log("Payment")
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    //console.log(doc)
});
//GENERIS 
//   const addUID = ( obj : object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
//   }
// let docOne = addUID({name : "susanta", age : 50})
// console.log(docOne)
//   const addUID = <T>( obj : T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
//   }
// let docOne = addUID({name : "susanta", age : 50})
// console.log(docOne.name)
//   const addUID = <T extends object>( obj : T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
//   }
// let docOne = addUID({name : "susanta", age : 50})
// console.log(docOne.name)
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: "susanta", age: 50 });
console.log(docOne.name);
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'shaun' }
};
const docFour = {
    uid: 1,
    resourceName: 'shoppingList',
    data: ['bread', 'milk']
};
console.log(docThree, docFour);
// ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
;
const docTwo = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: { title: 'name of the wind' }
};
const docFive = {
    uid: 10,
    resourceType: ResourceType.FILM,
    data: { title: 'name of the wind' }
};
console.log(docTwo);
console.log(docFive);

import {Invoice} from "./classes/Invoice.js"
import {Payment} from "./classes/Payment.js"
import { ListTemplate } from './classes/ListTemplate.js';
import {HasFormatter} from "./interfaces/HasFormatter.js"

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    let doc: HasFormatter;

    if (type.value === "invoice"){
   //     console.log("Invoice")
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
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


const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let docOne = addUID({name : "susanta", age : 50})
console.log(docOne.name)

interface Resource <T>{
    uid : number ,
    resourceName : string ,
    data : T
}

const docThree: Resource<object> = {
  uid: 1, 
  resourceName: 'person', 
  data: { name: 'shaun' }
};

const docFour: Resource<string[]> = {
  uid: 1, 
  resourceName: 'shoppingList', 
  data: ['bread', 'milk']
};

console.log(docThree, docFour);
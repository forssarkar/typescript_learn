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
  
    // TUPLES
    let values : [string,string,number] = [tofrom.value, details.value, amount.valueAsNumber]

    console.log(...values)

    let doc: HasFormatter;

    if (type.value === "invoice"){
   //     console.log("Invoice")
        doc = new Invoice(...values);
    } else {
     // console.log("Payment")
        doc = new Payment(...values);
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
//console.log(docOne.name)

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

//console.log(docThree, docFour);

// ENUMS

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };

interface Resource_v1 <T>{
  uid : number ,
  resourceType : ResourceType ,
  data : T
}

const docTwo: Resource_v1<object> = {
  uid: 1,
  resourceType: ResourceType.BOOK,
  data: { title: 'name of the wind' }
}
const docFive: Resource_v1<object> = {
  uid: 10,
  resourceType: ResourceType.FILM,
  data: { title: 'name of the wind' }
}

console.log(docTwo);
console.log(docFive);

// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
// tup[0] = false;
tup[0] = 'ken';

let student: [string, number];
//student = [23564, 'chun-li'];
student = ['chun-li', 23564];


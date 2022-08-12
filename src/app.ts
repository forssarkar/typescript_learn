interface IsPerson {
  name : string ,
  age : number ,
  speak(a:string) : void,
  spend(a:number) : number
}

const me : IsPerson = {
   name : 'Sunanta',
   age  : 52,
   speak(text : string) :void {
      console.log(text) ;
   } ,
   spend(amount : number) : number {
      console.log(amount) ;
      return amount;
   }
}

me.name = "ff"
me.speak("Hello English")
console.log(me.name)

const greatPerson= (person : IsPerson) => {
     console.log(person.name) ;
}

me.name = "Suman"
greatPerson(me) ;

import {Invoice} from "./classes/invoice.js"

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

console.log(invOne.format() , invTwo)

let invoices : Invoice[] = []

invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices)

invoices.forEach(inv => {
  inv.amount = 100000 ;
  console.log(inv.client, /*inv.details, */ inv.amount, inv.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
      type.value, 
      tofrom.value, 
      details.value, 
      amount.valueAsNumber
    );
  });


// class 
// class Invoice {
//   readonly client: string;
//   private details: string;
//   public amount: number;

//   constructor(c: string, d: string, a: number){
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//     }
//     format() {
//       return `${this.client} owes £${this.amount} for ${this.details}` ;

//     }
// }

// If Access modifier is in use , alternate way to create the class as below.
class Invoice {
  // readonly client: string;
  // private details: string;
  // public amount: number;

  constructor(
    readonly client : string ,
    private details: string,
    public amount: number,
  ){}

    format() {
      return `${this.client} owes £${this.amount} for ${this.details}` ;

    }
}



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


// const anchor = document.querySelector('a');

// console.log(anchor);

// // TS not sure whether a tag is avaliable in index file or not
// if (anchor) {
//     console.log(anchor.href);
// }

// // With ! sign, we informed TS that a tag is definitefy avaliable in index.html

// const anchor1 = document.querySelector('a')!;
// console.log(anchor1.href);

//const form = document.querySelector('form')!;

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


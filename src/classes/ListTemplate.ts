/*
    1. register a list container in the constructor
    2. create a render method to render a new li to the container
       -- accespts  arguments : Invoice or Payment , a Heading , a Position
       -- create a html template ( li,  h4 , p)  
       -- add the 'li' template to the start / end of the list
*/
import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate { 
    constructor(private container: HTMLUListElement){}

    // item : Total Item, Type = "Invoice" Or Payment, pos = Position

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText
        p.innerText = item.format();
        li.append(p);
        if(pos === 'start'){
            this.container.prepend(li);
        } else {
            this.container.append(li);

        }
    }
}
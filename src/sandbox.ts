let greet : Function ;

// Function 
greet = () => {
    console.log("Greet Function")
}

// Call the Function 
greet()
// Function with Parameter , cis optional , mark with ?
let add = (a:number , b: number , c?: number | string ) => {
    console.log(a+b)
    console.log(c)
}

add(5,4)

// Function with Parameter, c is optional with default value = 10
let add1 = (a:number , b: number , c: number | string = 10 ) => {
    console.log(a+b)
    console.log(c)
}

add1(15,4)

// Function with Parameter, retun is number
let add3 = (a:number , b: number ) : number => {
    return a+b ;
}

let sum = add3(100,200)

console.log(sum)
type StringOrNum = string| number ;
type objWithString = {name : string , uid : string | number}


const logDetails = (uid : string | number , item:string ) => {
    console.log("${item} has uid of {uid}")
}

const greet = (
    user : {
         name : string ,
         uid : string | number
    } )  => {
        console.log("%s has uid of %d" , user.name, user.uid )
}

greet( {name :"Susanta", uid: 20})

// Use your own type
const logDetailsv1 = (uid : StringOrNum , item:string) => {
    console.log( item + " has uid of " + uid)
}

logDetailsv1(20,"ss");


const greet1 = ( user : objWithString )  => {
        console.log(user.name )
}

greet1( {name :"Suman", uid: 18})
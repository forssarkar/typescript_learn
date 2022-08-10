"use strict";
const logDetails = (uid, item) => {
    console.log("${item} has uid of {uid}");
};
const greet = (user) => {
    console.log("%s has uid of %d", user.name, user.uid);
};
greet({ name: "Susanta", uid: 20 });
// Use your own type
const logDetailsv1 = (uid, item) => {
    console.log(item + " has uid of " + uid);
};
logDetailsv1(20, "ss");
const greet1 = (user) => {
    console.log(user.name);
};
greet1({ name: "Suman", uid: 18 });

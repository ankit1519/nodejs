console.log("first");
setTimeout(() => {
    console.log("2nd");
}, 2000);
setTimeout(() => {
    console.log("third");
}, 0);
console.log("last");

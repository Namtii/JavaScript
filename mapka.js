// let mapka = new Map([["test2",2],[`test3`,3]]);

// mapka.set(`test`, 1)
const sukces = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    

  if (sukces) {
    resolve("Udało się");
  } else {
    reject("testuje blad");
    
  }
  }, 2000);
});
console.log(promise);

promise.then((w) => {

    
console.log(w);
  
    
console.log(promise);

})
.catch ((error) => {

    console.log(`zlapalem wyjatek ${error}`)
  })
;

 



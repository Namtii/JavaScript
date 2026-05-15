// Jak pracować
// Przy każdym zadaniu:
// Najpierw opisz słownie pomysł
// Dopiero potem koduj
// Sprawdź edge case’y
// Zapytaj siebie: da się prościej? szybciej?
// POZIOM 1 — Fundament logiczny
// Zadanie 1: FizzBuzz
// Wypisz liczby 1–100.
// Ale:
// wielokrotność 3 → "Fizz"
// wielokrotność 5 → "Buzz"
// obu → "FizzBuzz"
// Czego uczy:
// warunki
// kolejność ifów
// modulo %
 


// for (let i=1; i<=16; i++) {
//   if (i % 3 ===0 && i % 5 === 0){console.log("FizzBuzz");}
//   else if (i % 3 === 0)
//     {console.log("Fizz");}
//   else if (i % 5 === 0)
//     {console.log("Buzz");} 
// else   {
//   console.log(i);
// }
// }
  
 

// Zadanie 2: Liczba parzysta
// Napisz funkcję:
// isEven(n)
// Zwraca true lub false.
// Rekrutacyjne myślenie:
// Czy działa dla:
// 0
// liczb ujemnych
// floatów?


// function isEven(n) {
//  if(n % 2 === 0){
//      return `true`;
//  } else {
//      return `false`;
//  }
// }

// let x = isEven(2);
// console.table(x);
// let y = isEven(-1.2)
// console.table(y);



// Zadanie 3: Odwróć string
// reverse("kot")
// => "tok"
// Uczy:
// pętli
// pracy na stringach
// alternatywnie split/reverse/join

// let kot = "kot"

// const reversed = kot.split("").reverse().join("");
// console.log(reversed);

 



// POZIOM 2 — Tablice (bardzo częste)







// Zadanie 4: Największa liczba
// max([3,7,2,9,1])
// => 9

// function max(arr) {
//   let max = arr[0];
//   console.log("Start: max =", max);

//   for (let i = 1; i < arr.length; i++) {
//     console.log(`Porównuję ${arr[i]} z ${max}`);
//     if (arr[i] > max) {
//       max = arr[i];
//       console.log(`✓ ${arr[i]} jest WIĘKSZE - nowe max = ${max}`);
//     } else {
//       console.log(`✗ ${arr[i]} nie jest większe - max zostaje ${max}`);
//     }
//   }

//   return max;
// }
// console.log(max([3,7,2,9,1]));


 

// Pytanie rekrutacyjne:
// A jeśli tablica pusta?
// console.log(max([])); // undefined, bo nie ma elementów do porównania



// Zadanie 5: Usuń duplikaty
// unique([1,2,2,3,1,5])
// => [1,2,3,5]



// Nauka:
// Set
// albo ręcznie przez obiekt
//  const arr = [1,2,2,3,1,5];

// const unique = [...new Set(arr)];

// console.log(unique);  



// Zadanie 6: Suma tablicy
// sum([1,2,3,4])
// => 10

 


// const arr = [1,2,3,4];
// let suma = 0;

// function sum(arr){
//     console.log(`test arr ${[arr]}`)
//     for (let i=0; i<arr.length; i++){
//         suma += arr[i];
//        console.log(`test`)
//        console.log(suma)
//     }
// };

// sum( [1,2,3,4])

// Potem zrób:
// pętlą
// reduce()

// const arr = [1,2,3,4];
 
// const sum = arr.reduce((acc, curr) => acc + curr, 0);
 
// console.log(sum);
 


// POZIOM 3 — Thinking like recruiter

// Zadanie 7: Czy to palindrom?
// isPalindrome("kajak")
// => true
// isPalindrome("ala")
// => true
// isPalindrome("kot")
// => false
// Potem wersja hard:
// Ignoruj spacje i wielkość liter.

// let isPalindrome = "kajak";
// let isPalindrome2 = "ala";
// let isPalindrome3 = "kot";


// function ifisPalindrome(zamianka){
//     console.log(`najpierw ${zamianka} zmieniamy na: `)
//      let test = zamianka.split(``).reverse().join(``)
//      console.log(test)
//      if(test === zamianka ){
//         console.log(`++ true ${test} to   jest palindrom dla ${zamianka} ++`)
//      } else console.log(`-- false ${test} to nie  jest palindrom dla ${zamianka} --`)
// };
// ifisPalindrome(isPalindrome);
// ifisPalindrome(isPalindrome2);
// ifisPalindrome(isPalindrome3);




// Zadanie 8: Policz litery
// countChars("banana")
// =>
// {
//   b:1,
//   a:3,
//   n:2
// }

// function liczonko(zmienna){
//     console.log(`test ${zmienna}`)
//     let rozbijamy = zmienna.split(``)
//     console.log(rozbijamy)
//     console.log(`dlugosc tablicy  czyli suma slowa \x1b[33m${zmienna}\x1b[0m wynosi ${rozbijamy.length}  `)
//     console.log("\x1b[31mCzerwony tekst\x1b[0m")
// };
// liczonko(`banana`);
// liczonko(`mhm`);
 

// const mapowanko = new Map();

// function testmapowy(zmienna){
// mapowanko.set(zmienna)
//     console.log(`\x1b[33m-------- Start test ${mapowanko.size} ${zmienna}---------- \x1b[0m`)

  
// const letters = zmienna.split("");
// console.log(`rozbijamy \x1b[31m ${letters} \x1b[0m`);

// // mapowanko.set(zmienna, letters.length )
// mapowanko.set(zmienna, ` suma slowa key wynosi ${letters.length}`);
    
// console.table(mapowanko);
 

// }
// console.table(mapowanko);

 
 


// Mega ważne:
// To uczy hashmap/object counting.

 

// Zadanie 9: Znajdź pierwszy niepowtarzalny znak
// firstUnique("aabbcddee")
// => "c"
 
// function firstUnique(zmienna){
//     console.log(`najpierw zmienna to : ${zmienna}`)
//         let rozbijamy = zmienna.split(``);
//         console.log(`teraz po rozbiciu ${rozbijamy}`);
//         let arr = [];
//         arr.push(rozbijamy);
//         console.table(`po pushowaniu do arr: ${arr}`);

//         let count = {};
//         for (let num of arr){
//             count[num] = (count[num] || 0) + 1;
            
//         }


// };




function firstUnique(arr) {
  const count = {};

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num of arr) {
    if (count[num] === 1) {
        console.log(num)
      return num;
    }
  }

  return null; // jeśli brak
}

firstUnique("aabbcddee");
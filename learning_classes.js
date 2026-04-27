let string = "komputronik ";


let array = [`komputer1`, `komputer2`, `komputer3`, `komputer4`, `komputer5`];

 let wyposazenie = {
    komputer1: [`myszka`, `klawiatura`, `monitor`],
    komputer2: [`myszka`, `myszka`,`klawiatura`, `monitor`],
    komputer3: [`myszka`, `klawiatura`,`klawiatura`, `monitor`],
    komputer4: [`myszka`, `klawiatura`, `monitor`,`monitor`],
    komputer5: [`myszka`, `klawiatura`, `monitor`]}


let mojanazaMapy = new Map();
mojanazaMapy.set("komputer1", [`ram16`, `dysk1tb`, `procesorI3`, `karta graficzna_gtx4090`,`monitor`, 22]);
mojanazaMapy.set("komputer2", [`ram32`, `dysk2tb`, `procesorI5`, `karta graficzna_gtx4400`]);
mojanazaMapy.set("komputer3", [`ram64`, `dysk4tb`, `procesorI7`, `karta graficzna_gtx4800`]);
mojanazaMapy.set("komputer4", [`ram128`, `dysk8tb`, `procesorI9`, `karta graficzna_gtx4600`]);
mojanazaMapy.set("komputer5", [`ram256`, `dysk16tb`, `procesorI9`, `karta graficzna_gtx4700`]);

class Komputer {
    constructor(nazwa, ram, dysk, procesor, kartaGraficzna, obudowa, monitor, klawiatura, mysz, plytaGlowna, zasilacz, chlodzenie) {
        this.nazwa = nazwa;   
        this.ram = ram;
        this.dysk = dysk;
        this.procesor = procesor;
        this.kartaGraficzna = kartaGraficzna;
        this.obudowa = obudowa;
        this.monitor = monitor;
        this.klawiatura = klawiatura; 
        this.mysz = mysz;
        this.plytaGlowna = plytaGlowna;
        this.zasilacz = zasilacz;
        this.chlodzenie = chlodzenie; 
      }

 
      get jakiemaCPU(){
return "procesor zainstalowany " + this.procesor;}

get opiszdysk(){
    return "dysk zainstalowany " + this.dysk + " GB";}

get minimumRAM(){
    if (this.ram === "ram32") {
        return "Ten komputer ma minimum 32 GB RAM";
    } else {
        return "Ten komputer ma zamalo Ramu mniej niż wymagane 32 GB RAM";
    } }   

set minimumRAM(value) {
    if (this.ram === "ram32") {
        console.log("Ten komputer ma minimum 32 GB RAM");
    } else {
        console.log("Ten komputer ma zamalo Ramu mniej niż wymagane 32 GB RAM");
    }  } 

    set ram(value) {
        if (value === "ram32" || value === "ram64" || value === "ram128" || value === "ram256") {
            this._ram = value;
        } else {
            console.log("Nieprawidłowa wartość RAM. Dozwolone wartości to: ram32, ram64, ram128, ram256.");
        }}





    parametrykomputera( ) {  
         console.log(` Nazwa: ${this.nazwa}`);
         console.log(`RAM: ${this.ram}`);
         console.log(`Dysk: ${this.dysk}`);
         console.log(`Procesor: ${this.procesor}`);
         console.log(`Karta graficzna: ${this.kartaGraficzna}`);
         console.log(`Obudowa: ${this.obudowa}`);
         console.log(`Monitor: ${this.monitor}`);
         console.log(`Klawiatura: ${this.klawiatura}`);
         console.log(`Mysz: ${this.mysz}`);
         console.log(`Płyta główna: ${this.plytaGlowna}`);
         console.log(`Zasilacz: ${this.zasilacz}`);
         console.log(`Chłodzenie: ${this.chlodzenie}`);
      
}


notmissingHW() {
    if (this.obudowa === undefined || this.monitor === undefined || 
        this.klawiatura === undefined || this.mysz === undefined ||
        this.plytaGlowna === undefined || this.zasilacz === undefined 
        || this.chlodzenie === undefined) {
        console.log("Brakuje elementów wyposażenia komputera");
    }
}
ktorylepszy(komputerA, komputerB) {
    if (komputerA.procesor > komputerB.procesor) {
        console.log(`${komputerA.nazwa} ma lepszy procesor niż ${komputerB.nazwa}`);
    } else if (komputerA.procesor < komputerB.procesor) {
        console.log(`${komputerB.nazwa} ma lepszy procesor niż ${komputerA.nazwa}`);
    } else {
        console.log(`${komputerA.nazwa} i ${komputerB.nazwa} mają taki sam procesor`);
    }}

      set nazwa(blabla) {
    this._nazwa = blabla.toUpperCase();
  }
get nazwa() {
    return this._nazwa;
  }


}


class Laptop extends Komputer {
    constructor(nazwa, ram, dysk, procesor, kartaGraficzna, obudowa, monitor, klawiatura, mysz, plytaGlowna, zasilacz, chlodzenie, bateria) {
        super(nazwa, ram, dysk, procesor, kartaGraficzna, obudowa, monitor, klawiatura, mysz, plytaGlowna, zasilacz, chlodzenie);
        this.bateria = bateria;
        this.klawiaturanumeryczna = true; 
    }}



//  function porownanieKomputerow(komputerA, komputerB) {
//     if (komputerA.procesor   > komputerB.procesor) {
//         console.log(`${komputerA.nazwa} ma lepszy procesor niż ${komputerB.nazwa}`);
//     } else if (komputerA.procesor < komputerB.procesor) {
//         console.log(`${komputerB.nazwa} ma lepszy procesor niż ${komputerA.nazwa}`);
//     } else {
//         console.log(`${komputerA.nazwa} i ${komputerB.nazwa} mają taki sam procesor`);
//     }   }


let komputer1 = new Komputer("komputer 1", 0, "1000", "procesorI3", "karta graficzna_gtx4090");
// komputer1.parametrykomputera();
// komputer1.notmissingHW();
// komputer1.minimumRAM = "ram32";
console.log(komputer1.jakiemaCPU);
let komputer2 = new Komputer("komputer 2", "ram32", "dysk2tb", "procesorI5", "karta graficzna_gtx4400");
console.log(komputer2.jakiemaCPU);
// komputer2.parametrykomputera();
let komputer3 = new Komputer("komputer 3", "ram64", "dysk4tb", "procesorI7", "karta graficzna_gtx4800");
//  porownanieKomputerow(komputer1, komputer2);
//  porownanieKomputerow(komputer2, komputer3);   
 komputer1.ktorylepszy(komputer1, komputer3);
// console.log(komputer1.opiszdysk);
// console.log(komputer1.minimumRAM);
// console.log(komputer1.nazwa);
let laptop1 = new Laptop("laptop 1", "ram64", "dysk4tb", "procesorI7", "karta graficzna_gtx4800", "obudowa1", "monitor1", "klawiatura1", "mysz1", "plytaGlowna1", "zasilacz1", "chlodzenie1", "bateria5000mAh");
console.table(laptop1);   

function porowanie(jednostkaA, jednostkaB) {
    if (jednostkaA.procesor > jednostkaB.procesor) {
        console.log(`${jednostkaA.nazwa} ma lepszy procesor niż ${jednostkaB.nazwa}`);
    } else if (jednostkaA.procesor < jednostkaB.procesor) {
        console.log(`${jednostkaB.nazwa} ma lepszy procesor niż ${jednostkaA.nazwa}`);
    } else {
        console.log(`${jednostkaA.nazwa} i ${jednostkaB.nazwa} mają taki sam procesor`);
    }}
porowanie(komputer1, laptop1)  ;  

const porowanieHW = (jednostkaA, jednostkaB) => {
    if (jednostkaA.procesor > jednostkaB.procesor) {
        return `${jednostkaA.nazwa} ma lepszy procesor niż ${jednostkaB.nazwa}`;
    } else if (jednostkaA.procesor < jednostkaB.procesor) {
        return `${jednostkaB.nazwa} ma lepszy procesor niż ${jednostkaA.nazwa}`;
    } else {
        return `${jednostkaA.nazwa} i ${jednostkaB.nazwa} mają taki sam procesor`;
    }
};
console.log(porowanieHW(komputer1, laptop1) + " (wynik porównania HW)");


class zakupy {
    constructor(IDpracownika, nazwaProduktu, cena, ilosc, kodPromocyjny) {
        this.IDpracownika = IDpracownika;
        this.nazwaProduktu = nazwaProduktu;
        this.cena = cena;
        this.ilosc = ilosc,
        this.kodPromocyjny = kodPromocyjny;

    }
get wartoscZakupu() {
    return this.cena * this.ilosc;
}
get cena() {
    return this._cena;
}
get ilosc() {
    return this._ilosc;
}
set kodPromocyjny(value) {
    this._kodPromocyjny = value;  // Zapisz kod
    if (value === "PROMO10") {
        this.cena = this.cena * 0.9; // Zniżka 10%
    } else if (value === "PROMO20") {
        this.cena = this.cena * 0.8; // Zniżka 20%
    } else {
        console.log("Nieprawidłowy kod promocyjny.");
    }   
}
get kodPromocyjny() {
    return this._kodPromocyjny;
}
set ilosc(value) {
    if (value > 0) {
        this._ilosc = value;
    } else {
        console.log("Ilość musi być większa niż 0.");
    }   
}

set cena(value) {
    if (value > 0) {
        this._cena = value;
    } else {
        console.log("Cena musi być większa niż 0.");
    }
}
set nazwaProduktu(value) {  
    if (value.length > 0) {
        this._nazwaProduktu = value;
    } else {
        console.log("Nazwa produktu nie może być pusta.");
    }

}
set IDpracownika(value) {
    if (value > 0) {
        this._IDpracownika = value;
    } else {
        console.log("ID pracownika musi być większe niż 0.");
    }   
}
}

let zakup1 = new zakupy(123, "Laptop", 5000, 2, "PROMO10");
console.log(`Wartość zakupu: ${zakup1.wartoscZakupu} zl po zastosowaniu kodu promocyjnego ${zakup1.kodPromocyjny}.`);

console.log(zakup1._kodPromocyjny);
console.log(zakup1._cena);

// potestowac import { studentsArr } from '/studentsArr'
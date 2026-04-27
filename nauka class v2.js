 
import { magazyn1, magazyn2, MagazynZwortow, urzytkownicy, wyposazenie_biura } from './class_dane.js';

class magazyn {
    constructor(nazwa, ilosc, model, cenazakupuy, cenazasprzedazy) {
        this.nazwa = nazwa;
        this.ilosc = ilosc;
        this.model = model;
        this.cenazakupuy = cenazakupuy;
        this.cenazasprzedazy = cenazasprzedazy;
    }  
    get wartoscMagazynu() {
        return this.ilosc * this.cenazakupuy;
    }
    get zysk() {
        return this.ilosc * (this.cenazasprzedazy - this.cenazakupuy);
    }   
    get ilosc() {
        return this._ilosc;
    }   
    set ilosc(value) {
        if (value >= 0) {
            this._ilosc = value;    
        } else {
            console.log("Ilość nie może być ujemna.");
        }}
    set cenazakupuy(value) {
        if (value > 0) {
            this._cenazakupuy = value; 
        } else {
            console.log("Cena zakupu musi być większa niż 0.");
        }
    }
    set cenazasprzedazy(value) {
        if (value > 0) {
            this._cenazasprzedazy = value; 
        } else {
            console.log("Cena sprzedaży musi być większa niż 0.");
        }
    }
    set model(value) {
        if (value.length > 0) {
            this._model = value;
        } else {
            console.log("Model nie może być pusty.");
        }
    }
    set nazwa(value) {
        if (value.length > 0) {
            this._nazwa = value;
        } else {
            console.log("Nazwa nie może być pusta.");
        }
    }
    get nazwa() {
        return this._nazwa;
    }  
    get model() {
        return this._model;
    }
    get cenazakupuy() {
        return this._cenazakupuy;
    }
    get cenazasprzedazy() {
        return this._cenazasprzedazy;
    }   
    set sprzedaz(value) {
        if (value > 0 && value <= this.ilosc) {
            this.ilosc -= value;
            console.log(`Sprzedano ${value} szt. ${this.nazwa} ${this.model}.`);
        } else {
            console.log("Nie można sprzedać tej ilości.");
        }}
    get sprzedaz() {
        return this.ilosc;
    }   
    sprzedaj(magazynArray) {
        let parts = this.model.split(' ');
        let brand = parts[0];
        let modelPart = parts.slice(1).join(' ');
        let index = magazynArray.findIndex(item => item.laptop === brand && item.model === modelPart);
        if (index !== -1) {
            if (magazynArray[index].ilosc >= this.ilosc) {
                console.log(`Przed: ${magazynArray[index].ilosc} szt.`);
                magazynArray[index].ilosc -= this.ilosc;
                console.log(`Po: ${magazynArray[index].ilosc} szt.`);
                console.log(`Sprzedano ${this.ilosc} szt. ${this.nazwa} ${this.model}.`);
            } else {
                console.log("Nie można sprzedać tej ilości - brak wystarczającej ilości w magazynie.");
            }
        } else {
            console.log("Produkt nie znaleziony w magazynie.");
        }
    }
 #darowizna() {
    console.log(`Produkt ${this.nazwa} ${this.model} został przekazany jako darowizna.`);
}

darowiznaa() {
    this.#darowizna();
}
}

export { magazyn };

class magazynZwortow extends magazyn {
    constructor(nazwa, ilosc, model, cenazakupuy, cenazasprzedazy, powodZwrotu) {
        super(nazwa, ilosc, model, cenazakupuy, cenazasprzedazy);
        this.powodZwrotu = powodZwrotu;
    }  }
        
    console.table(magazyn1);
    // console.table(magazyn2);
    // console.table(MagazynZwortow);
    // console.table(urzytkownicy);
    // console.table(wyposazenie_biura);
// console.table(`stan magazynu1: ${magazyn1.length} produktów`);
// console.table(`wartosc magazynu1: ${magazyn1.reduce((total, item) => total + (item.ilosc * item.cenazakupuy), 0)} zł`);

// console.table(`stan magazynu2: ${magazyn2.length} produktów`);
// console.table(`wartosc magazynu2: ${magazyn2.reduce((total, item) => total + (item.ilosc * item.cenazakupuy), 0)} zł`);

// console.table(`stan magazynu zwrotów: ${MagazynZwortow.length} produktów`);
// console.table(`wartosc magazynu zwrotów: ${MagazynZwortow.reduce((total, item) => total + (item.ilosc * item.cenazakupuy), 0)} zł`);


console.log("=== STAN PRZED SPRZEDAŻĄ ===");
console.table(`stan magazynu1: ${magazyn1.length} produktów`);
console.table(`wartosc magazynu1: ${magazyn1.reduce((total, item) => total + (item.ilosc * item.cenazakupuy), 0)} zł`);

let sprzedaz = new magazyn("Laptop", 10, "Dell Inspiron", 500, 700);
console.log(`\n--- SPRZEDAŻ 1: ${sprzedaz.ilosc} szt. ${sprzedaz.nazwa} ${sprzedaz.model} ---`);
sprzedaz.sprzedaj(magazyn1);

let sprzedaz2 = new magazyn("Laptop", 1, "HP Pavilion", 600, 800);
console.log(`\n--- SPRZEDAŻ 2: ${sprzedaz2.ilosc} szt. ${sprzedaz2.nazwa} ${sprzedaz2.model} ---`);
sprzedaz2.sprzedaj(magazyn1);

let sprzedaz3 = new magazyn("Laptop", 1, "Lenovo ThinkPad", 700, 900);
console.log(`\n--- SPRZEDAŻ 3: ${sprzedaz3.ilosc} szt. ${sprzedaz3.nazwa} ${sprzedaz3.model} ---`);
sprzedaz3.sprzedaj(magazyn1);

console.log("\n=== STAN PO SPRZEDAŻACH ===");
console.log(`stan magazynu1: ${magazyn1.length} produktów`);
console.log(`wartosc magazynu1 po sprzedażach: ${magazyn1.reduce((total, item) => total + (item.ilosc * item.cenazakupuy), 0)} zł`);
 
    console.table(magazyn1);

let darowizna = new magazyn("Laptop", 2, "Acer Aspire", 400, 600);
console.log(`\n--- DAROWIZNA prywatna z #: ${darowizna.ilosc} szt. ${darowizna.nazwa} ${darowizna.model} ---`);
darowizna.darowiznaa(); 
 
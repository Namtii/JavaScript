console.log("1. Start programu");

// ------------------------------------
// Promise -> microtask
// ------------------------------------
Promise.resolve().then(() => {
  console.log("2. Promise microtask");
});

// ------------------------------------
// setTimeout -> macrotask
// ------------------------------------
setTimeout(() => {
  console.log("5. setTimeout callback");
}, 0);

// ------------------------------------
// Funkcja async
// ------------------------------------
async function pobierzWiki() {

  console.log("6. Start pobierania");

  try {

    // ------------------------------------
    // fetch -> async HTTP request
    // ------------------------------------
    const response = await fetch(
      "https://pl.wikipedia.org/api/rest_v1/page/summary/JavaScript"
    );

    // Promise z response.json()
    const data = await response.json();

    console.log("7. Dane z Wikipedii:");
    console.log("Tytuł:", data.title);
    console.log("Opis:", data.extract);
    q
    // ------------------------------------
    // Promise.all -> równoległe requesty
    // ------------------------------------
    const [jsRes, htmlRes] = await Promise.all([
      fetch("https://pl.wikipedia.org/api/rest_v1/page/summary/JavaScript"),
      fetch("https://pl.wikipedia.org/api/rest_v1/page/summary/HTML")
    ]);

    const jsData = await jsRes.json();
    const htmlData = await htmlRes.json();

    console.log("8. Promise.all zakończone");

    console.log("JS:", jsData.title);
    console.log("HTML:", htmlData.title);

  } catch (err) {

    // ------------------------------------
    // Obsługa błędu
    // ------------------------------------
    console.error("Błąd:", err);

  }

}

// ------------------------------------
// Wywołanie async funkcji
// ------------------------------------
pobierzWiki();

console.log("3. Koniec głównego kodu");
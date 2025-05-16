# Rocikovyprojekt2pol.
Ročníkový projekt 2. pololetí, Tomáš Jakub T3A

Pro tento projekt jsem se rozhodl udělat stránku ohledně počasí s pětidenní předpovědí, vlhkostí a rychlostí větru.
Musel jsem si sehnat API klíč, který mi umožní získávání dat o počasí. Tento klíč jsem sehnal za registraci na stránce OpenWeatherMap. 

![apiklic](https://github.com/user-attachments/assets/55d982a2-978d-4637-9358-81974d7203d6)

Po té, co jsem sehnal klíč, jsem se pustil do práce.
Napsat HTML a CSS kód byla jednoduchá věc, jelikož se posledních pár měsíců snažím makat na své formě ve psaní webových stránek. Poté jsem se ale dostal do tuhého. Mé zkušenosti s JavaScriptem jsou zcela základní a udělat takto těžký skript vyžadovalo pot a dřinu.
Po shlédnutí videí na YouTube jsem byl schopen napsat skript, ale stále se mi objevovaly nějaké chyby, na které nepřišel ani strejda ChatGPT. Skript prostě nešel rozdychat, a tak jsem poprosil mého kamaráda Matěje Víta, zda by mi nebyl schopen pomoct. Připojili jsme se na Discord a už to jelo — s Matějovými zkušenostmi jsme byli schopni skript opravit a tím rozpohybovat funkčnost stránky. Největší problémy nám dělaly funkce jako const vytvorKartuPocasi = (nazevMesta, polozkaPocasi, index), const ziskatUzivatelovuPolohu = () a const ziskatSouradniceMesta = ().
Naštěstí vše dopadlo v pořádku a já děkuji Matějovi — on je to vlastně takový můj živý Stack Overflow!

Stručně vysvětlené funkce v script.js souboru:

const vstupMesta = document.querySelector(".vstup-mesto");
Pole pro zadání města

_____________________________________________________________________________

const tlacitkoHledat = document.querySelector(".tlacitko-hledat");
Najde tlačítko s třídou .tlacitko-hledat (spouští vyhledávání počasí podle města)

_____________________________________________________________________________

const tlacitkoLokace = document.querySelector(".tlacitko-lokace");
Najde tlačítko s třídou .tlacitko-lokace (pro získání živé lokace)

_____________________________________________________________________________

const aktualniPocasiDiv = document.querySelector(".aktualni-pocasi");
Určuje místo na stránce, kam se zobrazí aktuální počasí

_____________________________________________________________________________

const kartyPocasiDiv = document.querySelector(".karty-pocasi");
Určuje místo na stránce, kam se vloží další dny předpovědi

_____________________________________________________________________________

const API_KLIC = "API klic";
API klíč k přístupu do služby OpenWeatherMap

_____________________________________________________________________________

vytvorKartuPocasi(nazevMesta, polozkaPocasi, index)
Vytvoří HTML kód pro zobrazení dnů s počasím.

Co dělá vnitřek funkce:

Pokud je první den (index = 0), vytvoří se větší karta s podrobnostmi (město, datum, teplota, vítr, vlhkost a ikona počasí)

![image](https://github.com/user-attachments/assets/accffc36-9bae-48b7-a46e-25758eda5bbf)
U ostatních dnů vytvoří menší karty se stejnými informacemi

![image](https://github.com/user-attachments/assets/c96a2c93-68b3-44d5-a17b-4ccdf95f4cad)

Data jako teplota se převedou z Kelvinů na °C

_____________________________________________________________________________

ziskatDetailyPocasi(nazevMesta, zemepisnaSirka, zemepisnaDelka): Získá 5denní předpověď počasí pomocí souřadnic.

Co dělá vnitřek funkce:

Vytvoří URL pro OpenWeather API

Použije fetch a přečte odpověď jako .json

Vyfiltruje záznam na každý den

Vyčistí data z předchozího hledání

Pro každý den vytvoří kartu a zobrazí ji na stránce

Kdyby nastala chyba, vypíše zprávu

![image](https://github.com/user-attachments/assets/e45cf871-2ecf-40c7-8764-852688ac44c2)

_____________________________________________________________________________

ziskatSouradniceMesta(): Najde souřadnice zadaného města.

Co dělá vnitřek funkce:

Načte název města

Pošle požadavek na API OpenWeather (název města → souřadnice)

Pokud se město nenajde, zobrazí upozornění

Pokud se souřadnice získají, zavolá funkci pro získání podrobností o počasí

_____________________________________________________________________________

ziskatUzivatelovuPolohu(): Získá aktuální polohu uživatele pomocí prohlížeče.

Co dělá vnitřek funkce:

Použije getCurrentPosition() pro získání souřadnic

Ze souřadnic pošle požadavek na geo API (souřadnice → název města)

Získané město a souřadnice předá funkci ziskatDetailyPocasi()

Pokud uživatel nepovolí přístup k poloze, zobrazí se upozornění

_____________________________________________________________________________

tlacitkoLokace.addEventListener("click", ziskatUzivatelovuPolohu);
Po kliknutí na tlačítko s lokací se zavolá funkce pro počasí podle polohy.

_____________________________________________________________________________

tlacitkoHledat.addEventListener("click", ziskatSouradniceMesta);
Po kliknutí na tlačítko hledat se zavolá funkce pro počasí podle města.

_____________________________________________________________________________

vstupMesta.addEventListener("keyup", e => e.key === "Enter" && ziskatSouradniceMesta());
Po stisknutí klávesy Enter ve vstupním poli se spustí hledání města.

_____________________________________________________________________________

Shrnutí:
Kód pro jednoduchou aplikaci, která ukazuje počasí (teplotu, vlhkost, rychlost větru a další.

Zde přidávám rychlou ukázku mé práce v podobě Youtube videa - https://www.youtube.com/watch?v=I1YiaS8cuf8

Ještě jednou děkuji Matějovi za pomoc se skriptem a doufám, že se vám můj projekt líbil.


Github - https://github.com

Openweather - https://home.openweathermap.org

Visual Studio - https://code.visualstudio.com







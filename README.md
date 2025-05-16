# Rocikovyprojekt2pol.
Ročníkový projekt 2. pololetí , Tomáš Jakub T3A

Pro tento projekt sem se rozhodl udelat stranku ohledne pocasi s peti denni predpovedi vlhkosti a rychlosti vetru.
Musel sem si sechnat api key ktery mi umozni ziskavani dat o pocasi. Tento klic sem sehnal za registraci na strance Openweathermap.
![apiklic](https://github.com/user-attachments/assets/55d982a2-978d-4637-9358-81974d7203d6)

Po te co jsem sehnal klic jsem se pustil do prace.
Napsat Html a Css kod byla jednducha vec jelikoz se poslednich par mesicu snazim makat na sve forme ve psani webovych stranek. Pote jsem se ale dostal do tuhych. Me zkusenosti s javascriptem jsou zcela zakladni a udelat takto tezky script vyzadovalo pot a drinu.
Po shlednuti videi na youtube jsem byl schopen napsat script ale stale se mi objevovali nejake chyby na ktere neprisel ani strejda chat gpt. Skript proste nesel rozdychat a tak jsem poprosil meho kamarada Mateje Víta zda by mi nemohl byt schopen pomoct. Pripojili sme se na discord a uz to jelo s Matejovymi zkusenostmi sme byli schopni script opravit a tim rozpohybovat funkcnost stranky. Nejvetsi problemy nam delali funkce jako const vytvorKartuPocasi = (nazevMesta, polozkaPocasi, index), const ziskatUzivatelovuPolohu = () a const ziskatSouradniceMesta = (). Nastesti vse dopadlo v poradku a ja dekuji matejovi on je to vlastne takovy muj zivy stack overflow!

Strucne vysvetlene funkce v script.js souboru: 

const vstupMesta = document.querySelector(".vstup-mesto");
Pole pro zadani mesta

_____________________________________________________________________________

const tlacitkoHledat = document.querySelector(".tlacitko-hledat");
Najde tlačítko s třídou .tlacitko-hledat (spouští vyhledávání počasí podle města)

_____________________________________________________________________________

const tlacitkoLokace = document.querySelector(".tlacitko-lokace");
Najde tlačítko s třídou .tlacitko-lokace (pro ziskani zive lokace)

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

vytvorKartuPocasi(nazevMesta, polozkaPocasi, index): Vytvoří HTML kód pro zobrazení dnů s počasím.

Co delá vnitřek funkce:

Pokud je první den index = 0, vytvoří se vetší karta s podrobnostmi (město, datum, teplota, vítr, vlhkost a ikona počasí)
![image](https://github.com/user-attachments/assets/accffc36-9bae-48b7-a46e-25758eda5bbf)
U ostatních dnů vytvoří menší karty se stejnými informacemi
![image](https://github.com/user-attachments/assets/c96a2c93-68b3-44d5-a17b-4ccdf95f4cad)

Data jako teplota se převedou z Kelvinů na °C

_____________________________________________________________________________

ziskatDetailyPocasi(nazevMesta, zemepisnaSirka, zemepisnaDelka): Získá 5denní předpověď počasí pomocí souřadnic.

Co dělá vnitřek funkce:

Vytvoří URL pro OpenWeather API

Použije fetch a přečte odpověd jako .json

Vyfiltruje záznam na každy den 

Vyčistí data z predchoziho hledani

Pro každý den vytvoří kartu a zobrazí ji na stránce 

Kdyby nastala chyba vypise zpravu

![image](https://github.com/user-attachments/assets/e45cf871-2ecf-40c7-8764-852688ac44c2)

_____________________________________________________________________________

ziskatSouradniceMesta(): Najde souřadnice zadaného města.

Co dělá vnitřek funkce:

Načte název města 

Pošle požadavek pro API OpenWeather (nazev města na souřadnice).

_____________________________________________________________________________

ziskatUzivatelovuPolohu(): Získá aktuální polohu uživatele pomocí prohlížeče.

Co dělá vnitřek funkce:

Použije getCurrentPosition() pro získání souřadnic.

Ze souřadnic pak pošle požadavek geo API (souřadnice → název města).

Získané město a souřadnice předá funkci ziskatDetailyPocasi().

Pokud uživatel nepovolí přístup k poloze, zobrazí se upozornění.

_____________________________________________________________________________

tlacitkoLokace.addEventListener("click", ziskatUzivatelovuPolohu);: Po kliknutí na tlačítko s lokací → zavolá funkci pro počasí podle polohy.

_____________________________________________________________________________

tlacitkoHledat.addEventListener("click", ziskatSouradniceMesta);: o kliknutí na tlačítko hledat → zavolá funkci pro počasí podle města.

_____________________________________________________________________________

vstupMesta.addEventListener("keyup", e => e.key === "Enter" && ziskatSouradniceMesta());: Po stisknutí Enter ve vstupním poli → spustí hledání města.

Shrnutí: 

Kod pro jednoduchou aplikaci ktera ukazuje pocasi (teplotu, vlhkost, rychlost vetru a dalsi).

Jeste jendou dekuji Matejovi za pomoc se scriptem a vam ze jste si precetl muj projekt.



const vstupMesta = document.querySelector(".vstup-mesto");
const tlacitkoHledat = document.querySelector(".tlacitko-hledat");
const tlacitkoLokace = document.querySelector(".tlacitko-lokace");
const aktualniPocasiDiv = document.querySelector(".aktualni-pocasi");
const kartyPocasiDiv = document.querySelector(".karty-pocasi");
const API_KLIC = "Api klic";

const vytvorKartuPocasi = (nazevMesta, polozkaPocasi, index) => {
    if(index === 0) {
        return `<div class="detaily">
                    <h2>${nazevMesta} (${polozkaPocasi.dt_txt.split(" ")[0]})</h2>
                    <h6>Teplota: ${(polozkaPocasi.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Vítr: ${polozkaPocasi.wind.speed} m/s</h6>
                    <h6>Vlhkost: ${polozkaPocasi.main.humidity}%</h6>
                </div>
                <div class="ikona">
                    <img src="https://openweathermap.org/img/wn/${polozkaPocasi.weather[0].icon}@4x.png" alt="ikona-pocasi">
                    <h6>${polozkaPocasi.weather[0].description}</h6>
                </div>`;
    } else {
        return `<li class="karta">
                    <h3>(${polozkaPocasi.dt_txt.split(" ")[0]})</h3>
                    <img src="https://openweathermap.org/img/wn/${polozkaPocasi.weather[0].icon}@4x.png" alt="ikona-pocasi">
                    <h6>Teplota: ${(polozkaPocasi.main.temp - 273.15).toFixed(2)}°C</h6>
                    <h6>Vítr: ${polozkaPocasi.wind.speed} m/s</h6>
                    <h6>Vlhkost: ${polozkaPocasi.main.humidity}%</h6>
                </li>`;
    }
}

const ziskatDetailyPocasi = (nazevMesta, zemepisnaSirka, zemepisnaDelka) => {
    const URL_API_POCASI = `https://api.openweathermap.org/data/2.5/forecast?lat=${zemepisnaSirka}&lon=${zemepisnaDelka}&appid=${API_KLIC}`;
    
    fetch(URL_API_POCASI)
        .then(odpoved => odpoved.json())
        .then(data => {
            const jedinecneDny = [];
            const petDniPredpoved = data.list.filter(predpoved => {
                const datumPredpovedi = new Date(predpoved.dt_txt).getDate();
                if (!jedinecneDny.includes(datumPredpovedi)) {
                    return jedinecneDny.push(datumPredpovedi);
                }
            });

            vstupMesta.value = "";
            aktualniPocasiDiv.innerHTML = "";
            kartyPocasiDiv.innerHTML = "";

            petDniPredpoved.forEach((polozkaPocasi, index) => {
                const html = vytvorKartuPocasi(nazevMesta, polozkaPocasi, index);
                if (index === 0) {
                    aktualniPocasiDiv.insertAdjacentHTML("beforeend", html);
                } else {
                    kartyPocasiDiv.insertAdjacentHTML("beforeend", html);
                }
            });        
        })
        .catch(() => {
            alert("Nastala chyba při načítání předpovědi počasí!");
        });
}

const ziskatSouradniceMesta = () => {
    const nazevMesta = vstupMesta.value.trim();
    if (nazevMesta === "") return;
    const URL_API = `https://api.openweathermap.org/geo/1.0/direct?q=${nazevMesta}&limit=1&appid=${API_KLIC}`;
    
    fetch(URL_API)
        .then(odpoved => odpoved.json())
        .then(data => {
            if (!data.length) return alert(`Město ${nazevMesta} nebylo nalezeno`);
            const { lat, lon, name } = data[0];
            ziskatDetailyPocasi(name, lat, lon);
        })
        .catch(() => {
            alert("Nastala chyba při hledání města!");
        });
}

const ziskatUzivatelovuPolohu = () => {
    navigator.geolocation.getCurrentPosition(
        pozice => {
            const { latitude, longitude } = pozice.coords;
            const URL_API = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KLIC}`;
            fetch(URL_API)
                .then(odpoved => odpoved.json())
                .then(data => {
                    const { name } = data[0];
                    ziskatDetailyPocasi(name, latitude, longitude);
                })
                .catch(() => {
                    alert("Nastala chyba při hledání města!");
                });
        },
        chyba => {
            if (chyba.code === chyba.PERMISSION_DENIED) {
                alert("Přístup k poloze byl odepřen. Prosím povolte přístup k poloze.");
            } else {
                alert("Nastala chyba při získávání polohy.");
            }
        });
}

tlacitkoLokace.addEventListener("click", ziskatUzivatelovuPolohu);
tlacitkoHledat.addEventListener("click", ziskatSouradniceMesta);
vstupMesta.addEventListener("keyup", e => e.key === "Enter" && ziskatSouradniceMesta());

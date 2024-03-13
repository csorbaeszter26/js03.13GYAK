import { GYUMOLCSOK } from "./adatok.js";

const vasarolt = [];

// 1. feladat
function letrehozTablazat(GYUMOLCSOK) {
    
    let txt = "";
    txt += "<table>"
    for (let index = 0; index < GYUMOLCSOK.length; index++) {
        txt += `<tr>
                <td>${GYUMOLCSOK[index].nev}</td>
                <td>${GYUMOLCSOK[index].tomeg}</td>
                <td>${GYUMOLCSOK[index].ar}</td>
                </tr>`
        
    }
    txt += "</table>" 
    return txt;    
}


const tablazat = document.querySelector("#feladat_1");
tablazat.innerHTML = letrehozTablazat(GYUMOLCSOK);



// 2. feladat
function osszesit(GYUMOLCSOK) {

    var osszar = 0;
    var osszsuly = 0;

    for (let index = 0; index < GYUMOLCSOK.length; index++) {
        osszar += GYUMOLCSOK[index].ar;  
        osszsuly += GYUMOLCSOK[index].suly;
    }
    return {osszar:osszar, osszsuly:osszsuly};

    

}

const osszesen = document.querySelector("#feladat_2");
osszesen.innerHTML = `A  gyümölcsök súlya összesen: ${osszesit(GYUMOLCSOK).osszsuly}g <br> A gyümölcsök ára összesen: ${osszesit(GYUMOLCSOK).osszar}g`;


// 3. feladat
function vasarol(zoldseg) {

}

// 4. feladat
function torolEsemeny() {

}
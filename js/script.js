let datas = [];
async function init() {
    datas = await getDatas();
    ChangeTop(datas, 1);
    majHoro();
}
  


async function majHoro(id = 1) {
    try {
        const requete = await fetch('json/horoscope.json');
        const horoscopeData = await requete.json();
        const horoData = horoscopeData.find(item => item.id === id);

        if (horoData) {
            document.querySelector('h1').textContent = horoData.signe;
            document.querySelector('#date').textContent = horoData.date;
            document.querySelector('#amour span').innerHTML = `Amour: ${horoData.amour}`;
            document.querySelector('#travail').innerHTML = `Travail: ${horoData.travail}`;
            document.querySelector('#argent').innerHTML = `Argent: ${horoData.argent}`;
            document.querySelector('#sante').innerHTML = `Sant2: ${horoData.sante}`;
            document.querySelector('#famille').innerHTML = `Famille: ${horoData.famille}`;
            document.querySelector('#conseil').innerHTML = `Conseil: ${horoData.conseil}`;
            document.querySelector('aside img').src = horoData.image;
        }
    } catch (erreur) {
        console.error(`Erreur : ${erreur.message}`);
    }
}

majHoro();

function ChangeTop(datas, id){
    const prev = id <= 1 ? datas.length : id - 1;
    const signePrecedent = id >= datas.find(el.id == prev) 

    const left = document.querySelector('.left-horoscope');
    left.innerHTML = `${signePrecedent.signe} <span>${signePrecedent.date}</span>`; 


    // signe suivant

    const next = id >= datas.length ? 1 : id + 1;
    const signeSuivant = datas.find(el.id == next);

    // on peuple celui de droite

    const right = document.querySelector('.right-horoscope');
    right.innerHTML = `${signeSuivant.signe} <span>${signeSuivant.date}</span>`;

}



// event listener  sur les elements du top

const leftHoroscope = document.querySelector('.left-horoscope');
leftHoroscope.addEventListener('click', () => {
    const id = datas.find(el => el.signe === leftHoroscope.textContent).id;
    majHoro(datas, parseInt(rightHoroscope.dataset.id));
    ChangeTop(datas, parseInt(rightHoroscope.dataset.id));
});

const rightHoroscope = document.querySelector('.right-horoscope');
rightHoroscope.addEventListener('click', () => {
    const id = datas.find(el => el.signe === rightHoroscope.textContent).id;
    majHoro(datas, parseInt(rightHoroscope.dataset.id));
    ChangeTop(datas, parseInt(rightHoroscope.dataset.id));
});


// eventlistener sur la fleche droite 
// tu fais une variable index
// index ++ 
let index = 1;

document.querySelector('.fleche-droite').addEventListener('click', () => {
    index++;
    if (index > 3) {
        index = 1;
    }
    majHoro(index);
});

document.querySelector('.fleche-gauche').addEventListener('click', () => {
    index--;
    if (index < 1) {
        index = 3;
    }
    majHoro(index);
});

// methode avec les ternaires
// const = arrowRight = document.querySelector('.fleche-droite');
// let index = 1;

// arrowRight.addEventListener('click', () => {
//     index = index => datas.length ? 1 : index +1;
//     majHoro(index);
// });



// afficher la date du jour
const date = new Date();
const jour = date.getDate().toString().padStart(2, '0');
const mois = (date.getMonth() + 1).toString().padStart(2, '0'); 
const annee = date.getFullYear();

const dateFormatee = `${jour}/${mois}/${annee}`;
document.querySelector('#dateDuJour').innerText = `HOROSCOPE DU ${dateFormatee}`;
 



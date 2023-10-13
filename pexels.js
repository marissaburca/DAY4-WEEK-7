/* my key S5N90v5MIHncGFT9wfvDguEqCtHU0IR2sgTBfgWhrf8LipEpudHHJEBE */

/* rimuovo tutti i lorem ipsum che non mi servono */

const lorI= document.querySelectorAll('.card-text')
for(let i=0; i< lorI.length;i++)[
    lorI[i].remove()
]
 /*  sostituisco dinamicamente le img delle card al click del button */
 /*  creo funzione che prende parametro passato con invocazione della funzione*/

const changhingCards = function(param){ 
  fetch("https://api.pexels.com/v1/search?query=" + param , {
    headers: {
      Authorization: "S5N90v5MIHncGFT9wfvDguEqCtHU0IR2sgTBfgWhrf8LipEpudHHJEBE",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("ERRORE recupero dati");
      }
    })
    .then((database) => {
      console.log(database);
      const imgs = document.querySelectorAll(".card-img-top");
      imgs.forEach((elem) => {
        for (let i = 0; i < imgs.length; i++) {
          imgs[i].src = database.photos[i].src.tiny;
          const evId = database.photos[i].id
          imgs[i].addEventListener('click', ()=>{ 
           window.location.href = 'details.html' + evId
          })
        }
      });
      const idS = document.querySelectorAll(".text-muted");
      idS.forEach((elem) => {
        for (let i = 0; i < idS.length; i++) {
          idS[i].innerText = database.photos[i].id;
        }
      });
      const titles = document.querySelectorAll('.card-title')
      titles.forEach((elem) => {
        for (let i = 0; i < titles.length; i++) {
          titles[i].innerText =database.photos[i].alt;
          titles[i].addEventListener('click', ()=>{
          window.location.href = 'details.html'
      })}
      });
    })
    .catch((err) => {
      console.log("ERRORE".err);
    });
};

/* aggiungo event listener ai buttons */

const load = document.getElementById('load')
load.addEventListener('click', ()=> changhingCards('globe'))
const secondLoad = document.getElementById("second-load");
secondLoad.addEventListener("click", () =>changhingCards('autumn'))

/* straformo edit in hide e aggiungo ad esso event listener per farlo scomparire */
const pressToHide = document.querySelectorAll(".card .btn:nth-of-type(2)");
pressToHide.forEach((btn) => {
  btn.innerText = "Hide";
  btn.addEventListener("click", function () {
    const card = this.closest(".col-md-4");
    card.classList.add("swing");
    card;
  });
});

/*  creo form con barra di ricerca usando innerHTML */
const form = document.getElementById('here')
const search= document.createElement('div')
search.innerHTML=`
<form class="d-flex" role="search">
<input id="look" class="form-control me-2" type="search" placeholder="Search types of pictures..." aria-label="Search">
<button id="hell1" class="btn btn-outline-success" type="button">Let's GO!</button>
</form>`
form.appendChild(search)

/* prendo valore di input field e aggiungo al suo search button del form event listener che prende il campo compilato da utente e lo passa come paramentro della funzione che accede al fetch*/

const reasearch = document.getElementById('hell1')
reasearch.addEventListener('click', (e)=> {
 e.preventDefault()
 const valueInp = document.getElementById('look')
 const field = valueInp.value
 changhingCards(field)
})


/* my key S5N90v5MIHncGFT9wfvDguEqCtHU0IR2sgTBfgWhrf8LipEpudHHJEBE */
const load = document.getElementById('load')
load.addEventListener('click',(()=>{
fetch("https://api.pexels.com/v1/search?query=globe", {
headers: { 
    Authorization: "S5N90v5MIHncGFT9wfvDguEqCtHU0IR2sgTBfgWhrf8LipEpudHHJEBE", 
},
})
.then((res)=>{
    if(res.ok){
        return res.json()
    }
    else{
        throw new Error('ERRORE recupero dati')
    }
})
.then((database)=>{
    console.log(database)
     const imgs = document.querySelectorAll('.card-img-top')
     imgs.forEach((elem) => {
       
        for(let i= 0; i <imgs.length ; i++){
            
        imgs[i].src = database.photos[i].src.original}})
})
.catch((err)=> {
    console.log('ERRORE'. err)
})
}
))


const secondLoad = document.getElementById('second-load')
secondLoad.addEventListener('click',(()=>{
fetch("https://api.pexels.com/v1/search?query=autumn", {
headers: { 
    Authorization: "S5N90v5MIHncGFT9wfvDguEqCtHU0IR2sgTBfgWhrf8LipEpudHHJEBE", 
},
})
.then((res)=>{
    if(res.ok){
        return res.json()
    }
    else{
        throw new Error('ERRORE recupero dati')
    }
})
.then((database)=>{
    console.log(database)
     const imgs = document.querySelectorAll('.card-img-top')
     imgs.forEach((elem) => {
       
        for(let i= 0; i <imgs.length ; i++){
            
        imgs[i].src = database.photos[i].src.original}})
})
.catch((err)=> {
    console.log('ERRORE'. err)
})
}
))
const pressToHide= document.getElementsByClassName
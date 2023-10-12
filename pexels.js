/* my key S5N90v5MIHncGFT9wfvDguEqCtHU0IR2sgTBfgWhrf8LipEpudHHJEBE */

fetch("https://api.pexels.com/v1/search?query=sfera", {
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
})
.catch((err)=> {
    console.log('ERRORE'. err)
})

// https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=xDkz_NrnnPYKrDrhaC842oFDGpqSy3H5cUe8PxU1Feo
import { navbar } from "../components/navbar.js";
let nav = document.getElementById("navbar")
nav.innerHTML = navbar();


import { searchImages, append } from  "../scripts/fetch.js"


let search = (el) => {
    if(el.key == "Enter"){
        let value = document.getElementById("query").value 
        searchImages(value).then((data) => {

            console.log(data)
            let container = document.getElementById("container");
            // append(data.results,container);
            container.innerHTML = null;
            append(data.results, container)
            
        });
        
    }
}


document.getElementById("query").addEventListener("keydown",search)


// navbar 


let categories = document.getElementById("category").children


for(let el of categories){
    el.addEventListener("click" , csearch);
    
}

function csearch(){
    searchImages(this.id).then((data) => {

        console.log(data)
        let container = document.getElementById("container");
        // append(data.results,container);
        container.innerHTML = null;
        append(data.results, container)
        
    });
}
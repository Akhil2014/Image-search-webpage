// let searchImages = async (value) => {
//     try{
//         let res = await fetch(
//             `https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=xDkz_NrnnPYKrDrhaC842oFDGpqSy3H5cUe8PxU1Feo`
//         )

//         let data = await res.json();
//         // console.log(data);
//         return data;
//     }catch(err){
//         console.log(err)
//     }
// }

let searchImages = async (q)=>{
    let res = await fetch(`https://api.unsplash.com/search/photos/?query=${q}&per_page=100&client_id=xDkz_NrnnPYKrDrhaC842oFDGpqSy3H5cUe8PxU1Feo`);
    let data = await res.json();
    return data;
}



let append = (data, container)=>{
    data.forEach(({alt_description, urls:{small}})=>{
        let div = document.createElement("div");
        div.setAttribute("class","image");
        let img = document.createElement("img");
        img.src = small;
        let d1 = document.createElement("h3");
        d1.innerText = alt_description;
        div.append(img, d1);
        container.append(div);
    });

}






export {searchImages, append};
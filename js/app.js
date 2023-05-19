
let buscar = document.getElementById("buscar")


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'de53e0acb3mshab6c2cb5538caedp12434cjsnf4745b5cb3c8',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};


buscar.addEventListener(("click"),(el)=>{
  el.preventDefault()
let search = document.getElementById("search").value

const url = `https://steam2.p.rapidapi.com/search/${search}/page/1`;
 
// Realizar la solicitud GET utilizando Fetch
async function fetchData(url, options) {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const datos = await response.json();
        console.log(datos);
        obtenerId(datos);
      } else {
        throw new Error('Error en la solicitud. Código de estado: ' + response.status);
      }
    } catch (error) {
      console.log('Error en la solicitud:', error.message);
    }
}
  
// Llamar a la función fetchData
fetchData(url, options);
  

document.getElementById("search").value = ""
})

function obtenerId(datos) {
  IdPrincipal =datos[0]
  const ID = IdPrincipal.appId;
  console.log(ID);
   document.getElementById("imgJuego").src = IdPrincipal.imgUrl;
   
   const title = IdPrincipal.title;
   document.getElementById("title").innerHTML = title;
   
//    const link = IdPrincipal.url;
//    document.getElementById("link").href = link;
   
   const precio = IdPrincipal.price;
   document.getElementById("precio").innerHTML = precio;
   
   const fecha = IdPrincipal.released;
   document.getElementById("fecha").innerHTML = fecha;

   const summary = IdPrincipal.reviewSummary; 
   document.getElementById("summary").innerHTML = summary

   for (let i = 0; i < 10; i++) {
        otrasId =datos[i]
        let ID1 = otrasId.appId;
        console.log(ID1);
        const tituloOtros = otrasId.title;
        const textOtro = otrasId.reviewSummary;
        document.querySelector(".tarjetas").innerHTML += 
                        `
                        <div class="col-3 tarj" >
                        <div class="img2">
                            <img id="otrasImagenes" src="${otrasId.imgUrl}" alt="">
                        </div>
                    </div>
                        <div class="col-9">
                            <h1 id="tituloOtros" style="color: white;">${tituloOtros}</h1>
                            <br>
                            <p id="textOtro" style="color: antiquewhite;">${textOtro}</p>
                        </div>
                        
                        `
    
   }


// -------------
const url2 = `https://steam2.p.rapidapi.com/appDetail/${ID}`;

async function datosUrl2(url2, options, ID) {
    try {
      const response = await fetch(url2, options);
      if (response.ok) {
        const datos = await response.json();
        console.log(datos);
        const descripcion = datos.description; 
        document.getElementById("descripcion").innerHTML = descripcion;
        for (let i = 0; i < 10; i++) {
            let categoria = datos.tags[i].name; 
            document.querySelector(".categoriasJuego").innerHTML += `<p>=> <span id="categoria1">${categoria}</span></p>`;
        }

      } else {
        throw new Error('Error en la solicitud. Código de estado: ' + response.status);
      }
    } catch (error) {
      console.log('Error 2 en la solicitud:', error.message);
    }
  }

// Llamar a la función datosUrl2
datosUrl2(url2, options,ID);


const url3 = `https://steam2.p.rapidapi.com/newsForApp/${ID}/limit/10/300`;
  
async function datosUrl3(url3, options, ID) {
  try {
    const response = await fetch(url3, options);
    if (response.ok) {
      const datos = await response.json();
      console.log(datos);
      for (let i = 0; i < 10; i++) {
          let titulo = datos.appnews.newsitems[i].title; 
          let noticias = datos.appnews.newsitems[i].contents; 
          document.querySelector(".noticias").innerHTML += 
          `<h4 class="tituloNoticias" >${titulo}</h4>
          <p class="parrafoNoticias">&#10028 <span>${noticias}</span><hr></p>
          `;
      }

    } else {
      throw new Error('Error en la solicitud. Código de estado: ' + response.status);
    }
  } catch (error) {
    console.log('Error 2 en la solicitud:', error.message);
  }
}
  
// Llamar a la función datosUrl3
datosUrl3(url3, options,ID);

const url4 = 'https://steam2.p.rapidapi.com/appReviews/730/limit/40/*';

async function datosUrl4(url4, options, ID) {
  try {
    const response = await fetch(url4, options);
    if (response.ok) {
      const datos = await response.json();
      console.log(datos);
      for (let i = 0; i < 10; i++) {
          let comentarios = datos.reviews[i].review; 
          document.querySelector(".reviews").innerHTML += 
          `
          <p class="parrafoNoticias">&#11088 <span>${comentarios}</span><hr></p>
          `;
      }

    } else {
      throw new Error('Error en la solicitud. Código de estado: ' + response.status);
    }
  } catch (error) {
    console.log('Error 2 en la solicitud:', error.message);
  }
}
  
// Llamar a la función datosUrl4
datosUrl4(url4, options,ID);
}


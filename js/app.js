
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
        console.log("datos de url principal"+datos);
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
   
   const link = IdPrincipal.url;
   document.getElementById("link").href = link;
   
   const precio = IdPrincipal.price;
   document.getElementById("precio").innerHTML = precio;
   
   const fecha = IdPrincipal.released;
   document.getElementById("fecha").innerHTML = fecha;

   otrasId =datos[1]
   const ID1 = otrasId.appId;
   console.log(ID1);
    document.getElementById("otrasImagenes").src = otrasId.imgUrl;

    const tituloOtros = otrasId.title;
    document.getElementById("tituloOtros").innerHTML = tituloOtros;

    const textOtro = otrasId.reviewSummary;
    document.getElementById("textOtro").innerHTML = textOtro;

// -------------
     const url2 = `https://steam2.p.rapidapi.com/appDetail/${ID}`;

async function datosUrl2(url2, options, ID) {
    try {
        const response = await fetch(url2, options);
        if (response.ok) {
          const datos = await response.json();
          console.log("datos de url descripcion"+datos);
          mostrardescripcion(datos, ID);
        } else {
          throw new Error('Error en la solicitud. Código de estado: ' + response.status);
        }
    } catch (error) {
        console.log('Error 2 en la solicitud:', error.message);
        }
    }
}
// Llamar a la función datosUrl2
datosUrl2(url, options);

function mostrardescripcion(datos, ID) {

//   console.log(datos);
//   const description = datos.description;
//   console.log(description);
//   document.getElementById("descripcion").innerHTML = description;

//   const url3 = `https://youtube138.p.rapidapi.com/video/comments/?id=${ID}&hl=en&gl=US`;

//   fetch(url3, options)
//     .then((respon) => respon.json())
//     .then((datos) => mostrarComentarios(datos, ID))
//     .catch(function (error) {
//       console.log('Error en la solicitud:', error.message);
//     });
// }

// function mostrarComentarios(datos) {
//   console.log(datos);
//   let coment = ""
//   for (const valor of datos.comments) {
//     coment += `<p>${valor.content}</p><hr>` 
//   }
//   console.log(coment);
//   document.getElementById("comentarios").innerHTML = coment


}
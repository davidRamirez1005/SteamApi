
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

const url = 'https://steam2.p.rapidapi.com/search/Among%20Us/page/1';
 
// Realizar la solicitud GET utilizando Fetch
fetch(url,options)
.then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Error en la solicitud. Código de estado: ' + response.status);
    }
})
.then(function (datos) {

    console.log(datos);
    obtenerId(datos);
})
.catch(function (error) {
    // Ha ocurrido un error durante la solicitud
    console.log('Error en la solicitud:', error.message);
});

document.getElementById("search").value = ""
})

function obtenerId(datos) {
  a =datos[0]
  const ID = a.appId;
  console.log(ID);
   document.getElementById("imgJuego").src = a.imgUrl;
   
   const title = a.title;
   document.getElementById("title").innerHTML = title;
   
   const link = a.url;
   document.getElementById("link").href = link;
   
   const precio = a.price;
   document.getElementById("precio").innerHTML = precio;
   
   const fecha = a.released;
   document.getElementById("fecha").innerHTML = fecha;

   b =datos[1]
   const ID1 = b.appId;
   console.log(ID1);
    document.getElementById("otrasImagenes").src = b.imgUrl;

    const tituloOtros = b.title;
    document.getElementById("tituloOtros").innerHTML = tituloOtros;

    const textOtro = b.reviewSummary;
    document.getElementById("textOtro").innerHTML = textOtro;

// -------------
//   const url2 = `https://youtube138.p.rapidapi.com/video/details/?id=${ID}&hl=en&gl=US`;

//   fetch(url2, options)
//     .then((respon) => respon.json())
//     .then((datos) => mostrardescripcion(datos, ID))
//     .catch(function (error) {
//       console.log('Error en la solicitud:', error.message);
//     });
// }


// function mostrardescripcion(datos, ID) {

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
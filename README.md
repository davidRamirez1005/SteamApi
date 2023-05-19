# SteamApi

Api de Steam de rapidApi

![Screenshot from 2023-05-18 10-30-57](/home/skylab-178/Pictures/Screenshots/Screenshot from 2023-05-18 10-30-57.png)

En el input "name of the game" digitar un nombre de un juego que este en steam, la api traera el juego con ese nombre o relacionado, trae la imagen principal, descripcion, fecha de lanzamiento, precio,  comentarios, noticias y sus categorias del juego ademas obtiene los juegos relacionados por el nombre

Esta elaborado con html,css,bootstrap y javascript

La api tiene de 500 solicitudes por mes y 10 por minuto

```js
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'de53e0acb3mshab6c2cb5538caedp12434cjsnf4745b5cb3c8',
		'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
	}
};
```

si se llega a vencer crear otra cuenta en RapidApi y modificar los headers

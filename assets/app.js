// se crea arrays de peliculas series y libros 

const peliculas = [
    { name: 'After ever happy', img: '../PSL/Images/Peliculas/after_ever_happy.jpg' },
    { name: 'Amelie', img: '../PSL/Images/Peliculas/Amelie.jpg' },
    { name: 'American beauty', img: '../PSL/Images/Peliculas/american_beauty.jpg' },
    { name: 'Chicas Malas', img: '../PSL/Images/Peliculas/Chicas_Malas.jpg' },
    { name: 'El Irlandes', img: '../PSL/Images/Peliculas/El_Irlandés.jpg' },
    { name: 'El Laberinto del fauno', img: '../PSL/Images/Peliculas/el_laberinto_del_fauno.jpg' },
    { name: 'La Vida es bella', img: '../PSL/Images/Peliculas/la_vida_es_bella.jpg' },
    { name: 'The black phone', img: '../PSL/Images/Peliculas/the_black_phone.jpg' },
    { name: 'Thor love and thunder', img: '../PSL/Images/Peliculas/thor_love_and_thunder.jpg' },
    { name: 'Violet and finch', img: '../PSL/Images/Peliculas/Violet and Finch.jpg' },
];

const series = [
    { name: 'Breaking Bad', img: '../PSL/Images/series/breaking_bad.jpg' },
    { name: 'Vampire Academy', img: '../PSL/Images/series/Vampire_Academy.jpg' },
    { name: 'Drake y Josh', img: '../PSL/Images/series/Drake_y_Josh.jpg' },
    { name: 'La casa de papel', img: '../PSL/Images/series/La_casa_de_papel_Corea.jpg' },
    { name: 'Los 100', img: '../PSL/Images/series/los_100.jpg' },
    { name: 'Peaky Blinders', img: '../PSL/Images/series/peaky_blinders.jpg' },
    { name: 'Stranger Things', img: '../PSL/Images/series/Stranger_things_4.jpg' },
    { name: 'The Crown', img: '../PSL/Images/series/the_crown.jpg' },
    { name: 'The Sandman', img: '../PSL/Images/series/the_sandman.jpg' },
    { name: 'Vikingos', img: '../PSL/Images/series/Vikingos.jpg' },
    { name: 'Wanderlust', img: '../PSL/Images/series/wanderlust.jpg' },
];

const libros = [
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
    { name: '', img: '' },
];


const busqueda = document.querySelector('#buscar');
const peliculas_content = document.querySelector('.peliculas')
const series_content = document.querySelector('.series')
const libros_content = document.querySelector('.libros')
const mas = document.querySelector('.mas');
const borrar = document.querySelector('.borrar');

const filtrar = () => {

  peliculas_content.innerHTML = '';
  series_content.innerHTML = ''; 
  borrar.innerHTML = '';
  libros_content.innerHTML = '';

    let texto = busqueda.value.toLowerCase()

    for (let pelicula of peliculas) {
        let nombreP = pelicula.name.toLowerCase();
        if (nombreP.indexOf(texto) !== -1) {
          mas.innerHTML += "";
            peliculas_content.innerHTML +=
            `<div>
            <h4>${pelicula.name}</h4>
            <img class="imgp" src="${pelicula.img}"> 
            <button class="btn">Ver</button> <img class="icons" src="iconos/estrellas.png">
            </div>
            `
        }
    }

    for (let serie of series) {
        let nombreS = serie.name.toLowerCase();
        if (nombreS.indexOf(texto) !== -1) {
          mas.innerHTML += "";  
          series_content.innerHTML +=
            `<div>
            <h4>${serie.name}</h4>
            <img class="imgp" src="${serie.img}"> 
            <button class="btn">Ver</button> <img class="icons" src="iconos/pulgares-hacia-arriba.png">
            </div>
            `
        }
    }

  if(peliculas_content.innerHTML == "" ){
        peliculas_content.innerHTML = ` <h3> la pelicula no se encuentra en nuestro catalogo</h3>`
    }
 if(series_content.innerHTML == "" ){
        for(let i = 0; i< series.length;i++){
        console.log(series[i]);}
        series_content.innerHTML = ` <h3> la serie no se encuentra en nuestro catalogo</h3>`
    }
    if(libros_content.innerHTML == "" ){
      libros_content.innerHTML = ` <h3> el libro no se encuentra en nuestro catalogo</h3>`
    }

 if(busqueda.value == "" ){
    window.location.reload();
    }

}


busqueda.addEventListener('keyup' , filtrar)
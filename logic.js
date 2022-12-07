const boton1 = document.getElementById('1');
const boton2 = document.getElementById('2');
const boton3 = document.getElementById('3');
const boton4 = document.getElementById('4');
const boton5 = document.getElementById('5');
const boton6 = document.getElementById('6');
const boton7 = document.getElementById('7');
const boton8 = document.getElementById('8');
const boton9 = document.getElementById('9');
const boton0 = document.getElementById('0');
const botonMas = document.getElementById('+');
const botonMenos = document.getElementById('-');
const botonMultiplicar = document.getElementById('*');
const botonDividir = document.getElementById('/');
const botonIgual = document.getElementById(`igual`);
const botonBorrar = document.getElementById(`borrar`);

const visor = document.getElementById(`visor`);
agregar = (valor) => {
    visor.value = visor.value + valor;
}
// eliminar = (valor) =>{
//     visor.value = visor.value.substring(0, visor.value.lenght -1);
// }
boton0.addEventListener(`click`, function(){agregar(`0`)});
boton1.addEventListener(`click`, function(){agregar(`1`)});
boton2.addEventListener(`click`, function(){agregar(`2`)});
boton3.addEventListener(`click`, function(){agregar(`3`)});
boton4.addEventListener(`click`, function(){agregar(`4`)});
boton5.addEventListener(`click`, function(){agregar(`5`)});
boton6.addEventListener(`click`, function(){agregar(`6`)});
boton7.addEventListener(`click`, function(){agregar(`7`)});
boton8.addEventListener(`click`, function(){agregar(`8`)});
boton9.addEventListener(`click`, function(){agregar(`9`)});
botonMas.addEventListener(`click`, function(){agregar(`+`)});
botonMenos.addEventListener(`click`, function(){agregar(`-`)});
botonMultiplicar.addEventListener(`click`, function(){agregar(`x`)});
botonDividir.addEventListener(`click`, function(){agregar(`/`)});

botonBorrar.addEventListener(`click`,function(){
    visor.value = visor.value.substring(0, visor.value.length - 1);
});

botonIgual.addEventListener(`click`,()=>{
const visorValue = visor.value;
let array = visorValue.split(`+`);
let tot = 0;
for(let i=0; i<=1; i++){
    array[i] = parseFloat(array[i]);
   tot = tot + array[i];
}
visor.value = ``;
agregar(`${tot}`);
})

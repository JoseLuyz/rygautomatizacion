const images = [...document.querySelectorAll('.imageG')];

//popup

const popup = document.querySelector('.popupMq');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.nombre-imagen');
const LargeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const LeftArrow = document.querySelector('.flecha-izquierda');
const RightArrow = document.querySelector('.flecha-derecha');
const descripcion=document.querySelector('.descripcion');
const NombreD = descripcion.getElementsByTagName('p');


let index = 0;

images.forEach((item, i) => {
	item.addEventListener('click', () => {
		updateImage(i);
		popup.classList.toggle('active');
	})
})

const updateImage = (i) =>{
	let path = `imagenes/Automatizacion/img${i+1}.jpg`;
	let path2 = NombreD;
	LargeImage.src = path;
	imageName.innerHTML = path2;
	imageIndex.innerHTML = `0${i+1}`;
	index = i;
}

closeBtn.addEventListener('click', ()=>{
	popup.classList.toggle('active');
})

LeftArrow.addEventListener('click', ()=>{
	if (index > 0){
		updateImage(index - 1);
	}
})

RightArrow.addEventListener('click', ()=>{
	if (index < images.length -1){
		updateImage(index + 1);
	}
})
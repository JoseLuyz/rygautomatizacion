jQuery('document').ready(function($) {
	
	var menuBtn = $('.menu-icon'),
		menu = $('.navigation ul');

	menuBtn.click(function(){
		

		if (menu.hasClass('show')) {
			menu.removeClass('show');
		} else {
			menu.addClass('show');
		}

		


	});

});

{
const header= document.querySelector("header");
const sectionOne = document.querySelector(".banner");

const sectionOneOptions = {
	rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver 
(function(
	entries, 
	sectionOneObserver
	){
	entries.forEach(entry => {
		if(!entry.isIntersecting){
			header.classList.add("nav-scrolled");
		} else{
			header.classList.remove("nav-scrolled");
		}
	});

},
sectionOneOptions);

sectionOneObserver.observe (sectionOne);

}

/*{
const myslide = document.querySelector("img"),
	dot = document.querySelector('.dot')

let counter = 1;
slidefun(counter);

let timer = SetInterval(autoslide, 8000);
function autoslide(){
	counter + = 1;
	slidefun (counter);
}
function plusslides(n){
	counter + = n;
	slidefun(counter);
	resetTimer();
}

function currentSlide(n){
	counter + = 1;
	slidefun (counter);
	resetTimer();
}

function resetTimer(n){
	cleaarInterval(timer);
	timer = SetInterval(autoslide, 8000)
}

function slidefun(n){
	let i;
	for(i = 0;i<banner.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].classList.remove('active');
	}
	if (n>myslide.length) {
		counter = 1;
	}
	if (n<1) {
		counter = myslide.length;
	}
	myslide[counter -1].style.display = "block";
	dot[counter - 1].classList.add('active');
}
}*/


var galleryImg = document.querySelector('.galleryImg');
var gallery = [];
gallery[0] = 'bellossom.gif';
gallery[1] = 'mareep.gif';
gallery[2] = 'gengar.gif';
gallery[3] = 'kadabra.gif';
gallery[4] = 'gyarados.gif';

var pName = document.getElementById('name');
var circle = document.getElementById('circle');
var circle2 = document.getElementById('circle2');
var circle3 = document.getElementById('circle3');

circle.style.display = "block";
circle2.style.display = "block";
circle3.style.display = "block";
circle.style.animation = "fill 1s forwards";
circle2.style.animation = "fill2 1s forwards";
circle3.style.animation = "fill3 1s forwards";
pName.innerHTML = "Bellossom";

var imageNum = 0;

function left(){
	if(imageNum <= 0){ 
	imageNum = gallery.length;
	} 
	imageNum--;
	return img();		 
}

function right(){
	if(imageNum+1 >= gallery.length) {
	imageNum = -1;
	}
	imageNum++;
	return img();			 
}
function img(){
	if(imageNum===0){
		circle.style.animation = "fill 1s forwards";
		circle2.style.animation = "fill2 1s forwards";
		circle3.style.animation = "fill3 1s forwards";
		pName.innerHTML = "Bellossom";
	} else if(imageNum===1){
		circle.style.animation = "fill4 1s forwards";
		circle2.style.animation = "fill5 1s forwards";
		circle3.style.animation = "fill6 1s forwards";
		pName.innerHTML = "Mareep";
	} else if(imageNum===2){
		circle.style.animation = "fill7 1s forwards";
		circle2.style.animation = "fill8 1s forwards";
		circle3.style.animation = "fill9 1s forwards";
		pName.innerHTML = "Gengar";
	} else if(imageNum===3){
		circle.style.animation = "fill10 1s forwards";
		circle2.style.animation = "fill11 1s forwards";
		circle3.style.animation = "fill12 1s forwards";
		pName.innerHTML = "Kadabra";
	} else if(imageNum===4){
		circle.style.animation = "fill13 1s forwards";
		circle2.style.animation = "fill14 1s forwards";
		circle3.style.animation = "fill15 1s forwards";
		pName.innerHTML = "Gyarados";
	}
	return galleryImg.setAttribute('src', "images/"+gallery[imageNum]);	
}
var box = document.getElementById("box");
var container = document.getElementById("container");
var mySubmit = document.getElementById("mySubmit");
var title = document.getElementById("title");
var titlewrap = document.getElementById("titlewrap");
var dot1 = document.getElementById("dot1");
var dot2 = document.getElementById("dot2");
var dot3 = document.getElementById("dot3");

function submitFunction(){
	box.style.display = "none";
	container.style.display = "none";
	mySubmit.style.display = "none";

	dot1.style.animation = "show 3s infinite";
	dot2.style.animation = "show 3s 1s infinite";
	dot3.style.animation = "show 3s 2s infinite";
	title.innerHTML = "Loading"
	titlewrap.style.marginTop = "350px";
	titlewrap.style.marginLeft = "550px";
	titlewrap.style.fontSize = "42px";
}



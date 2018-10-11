let say = 5;
let vaxt;
let yukleme;

let melumat = document.getElementById('para').innerHTML;


function first() {
$('#dowbtn').prop('disabled', false);
}


function baslat() {

	yukleme = setTimeout(yukle,5000);

	yuklememuddeti();
	vaxt = setInterval(yuklememuddeti,1000);
	$('#stpbtn').prop('disabled', false);
	$('#dowbtn').prop('disabled', true);
};

function yukle() {
	window.alert("Yükleme Basladi...");

	document.getElementById("para").innerHTML = melumat;
	clearInterval(vaxt);
	say = 5;

	$('#stpbtn').prop('disabled', true);
	$('#dowbtn').prop('disabled', false);
};


function yuklememuddeti() {
	document.getElementById("para").innerHTML = "Yükleme " + say + " saniye icinde baslayacaq..";
	say--;

	if (say === 0) {
		clearInterval(vaxt);
	}
};

function yuklemenidayandir() {

	clearInterval(vaxt);
	clearTimeout(yukleme);

	document.getElementById("para").innerHTML = "Yükleme Dayandirildi!";
	say = 5; 

	$('#stpbtn').prop('disabled', true);
	$('#dowbtn').prop('disabled', false);
};







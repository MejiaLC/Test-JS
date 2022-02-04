const contenido = document.getElementById('content');
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const enviar = document.getElementById('enviar');
const parar = document.getElementById('parar');
const continuar = document.getElementById('continuar');

const newElement = () => {
	let p = document.createElement('p');
	let textoP = document.createTextNode('Hello world');
	p.appendChild(textoP);
	contenido.appendChild(p);
	contenido.style.color = '#dc3545';
}

const resetInputs = () => {
	num1.value = "";
	num2.value = "";
}

newElement();

enviar.addEventListener('click', (e) => {
	e.preventDefault();
	test();
})

const test = async () => {
	let numero1 = parseInt(num1.value);
	let numero2 = parseInt(num2.value);
	const array = [numero1, numero2];
	array.map(async (el, key) => {
		let li = document.createElement('li');
		localStorage.setItem(`Arreglo[${key}]`, el);
		li.innerHTML = `llave: ${key} valor: ${el}`;
		contenido.appendChild(li);
		li.classList.add('lis');
	});
	let longitud = array.length;
	console.log(longitud);
	localStorage.setItem('longitudActual', parseInt(longitud));
	console.log(localStorage.getItem('longitudActual'));
	resetInputs();
}

const fileZeros = (n) => {
	let numeroStr = n.toString();
	if(numeroStr.length < 2){
		return '0' + n;
	}
	return n; 
}

const getHour = () => {
	const fecha = new Date();
	fecha.toLocaleTimeString('en-US');
	let hour = document.querySelector('.hour').textContent = fileZeros(fecha.getHours());
	let min = document.querySelector('.min').textContent = fileZeros(fecha.getMinutes());
	let seconds = document.querySelector('.sec').textContent = fileZeros(fecha.getSeconds());

	if(hour==00 && min==00 && seconds==00){
		alert('Ya es media noche anda a bañarte. CERDO');
	}
}

getHour();

let timer = setInterval(() => {
	getHour()
}, 1000)

parar.addEventListener('click', (e) => {
	clearInterval(timer);
});

continuar.addEventListener('click', (e) => {
	location.reload();
});

var var1 = 10;
let let1 = 5;
const const1 = "15";
var1 += let1;
//var1 = var1.toString();
//const1 = Number(const1);

document.getElementById('js').innerText = "Olá mundo \n";
document.getElementById('js').innerText += "Var= " + var1 + " Let= " + let1 + " Const= " + const1 + "\n";
document.getElementById('js').innerText += "<hr>Tipos: Var= " + typeof(var1) + " Let= " + typeof(let1) + " Const= " + typeof(const1) + "\n";

const js = document.getElementById('js');
js.innerHTML += "<hr>";


//Operadores Relacionais

js.innerHTML += "var1 com const1" +
"<br> var1 === const1 = " + (var1 === const1) +
"<br> var1 == const1 = " + (var1 == const1) +
"<br> var1 != const1 = " + (var1 != const1) +
"<br> var1 < const1 = " + (var1 < const1) +
"<br> var1 > const1 = " + (var1 > const1) +
"<br> var1 <= const1 = " + (var1 <= const1) +
"<br> var1 >= const1 = " + (var1 >= const1);

js.innerHTML += "<hr>";

//Operadores Lógicos

js.innerHTML +=
"<br> var1 == const1 E var1 == let1 = " + (var1 == const1 && var1 == let1) +
"<br> var1 == const1 OU var1 == let1 = " + (var1 == const1 || var1 == let1);


//Estruturas de Decisão

js.innerHTML += "<hr>";

if(var1++ == const1){
	js.innerHTML += "<h1> é Igual</h1>";
}else{
	js.innerHTML += "<h1> <b>Não</b> é Igual</h1>";
}

js.innerHTML += (var1 == const1)? "<h1> é Igual</h1>" : "<h1> <b>Não</b> é Igual</h1>";

const semana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

switch(semana[3]){
	case "Segunda":
		js.innerHTML += "<h3>Segunda</h3>";
	break;
	case "Terça":
		js.innerHTML += "<h3>Terça</h3>";
	break;
	case "Quarta":
		js.innerHTML += "<h3>Quarta</h3>";
	break;
	case "Quinta":
		js.innerHTML += "<h3>Quinta</h3>";
	break;
	case "Sexta":
		js.innerHTML += "<h3>Sexta</h3>";
	break;
	default:
		js.innerHTML += "<h3>Escolha um dia válido</h3>";
	break;
}
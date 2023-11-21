var var1 = 10;//global
let let1 = 5;//local
const const1 = "15";//constante 

var1 += let1;
// var1= var1.toString();//conversao de tipo
// const1 = Number(const1); (erro, nao pode mudar tipo de constante depois que feita!)

document.getElementById('js').innerText="Ola Mundo!\n";
document.getElementById('js').innerText +="Var= "+var1+"Let= "+let1+"Const= "+const1 + "\n";
document.getElementById('js').innerText +=" <hr> tipos: Var= "+typeof (var1)+" Let= "+typeof (let1)+" Const= "+typeof (const1) + "\n";// nao da pra usar tags html, apenas texto

//incurtando escrita por meio de constante 
const js = document.getElementById('js');
js.innerHTML += "<hr>"

//operadores relacionais 

js.innerHTML += "var1 com const1" +
"<br> var1 === const1 = " + (var1 === const1) +//comparacao de tipo
"<br> var1 == const1 = " + (var1 == const1) +
 "<br> var1 != const1 = " + (var1 != const1) +
 "<br> var1 < const1 = " + (var1 < const1) +
 "<br> var1 > const1 = " + (var1 > const1) +
 "<br> var1 <= const1 = " + (var1 <= const1) +
 "<br> var1 >= const1 = " + (var1 >= const1);
 
 js.innerHTML += "<hr>";

 //Operadores logicos
js.innerHTML +=
"<br> var1 == const1 E var1 == let1 = " + (var1 == const1 && var1 == let1) +
"<br> var1 == const1 OU var1 == let1 = " + (var1 == const1 || var1 == let1);

js.innerHTML += "<hr>";

//Estruturas de decisao
if(var1++ == const1)
{
    js.innerHTML+="<h1> eh ingual</h1>";
}
else
{
    js.innerHTML+="<h1> nao eh ingual</h1>";
}
js.innerHTML+=(var1 == const1)? "<h1> eh ingual</h1>" : "<h1> n eh ingual</h1>";

js.innerHTML += "<hr>";
//switch
const semana =["segunda", "terca","quarta","quinta", "sexta", "sabado","domingo" ];
switch(semana[0]){
    case "segunda":
        js.innerHTML += "<h3>segunda</h3>"
        break;
    case "terca":
        js.innerHTML += "<h3>terca</h3>"
        break;
    case "quarta":
        js.innerHTML += "<h3>quarta</h3>"
        break;
    case "quinta":
        js.innerHTML += "<h3>quinta</h3>"
        break;
    case "sexta":
        js.innerHTML += "<h3>sexta</h3>"
        break;
    case "sabado":
        js.innerHTML += "<h3>sabado</h3>"
        break;
    case "domingo":
        js.innerHTML += "<h3>domingo</h3>"
        break;
    default:
        js.innerHTML += "<h3>escolha um dia valido</h3>"
        
}
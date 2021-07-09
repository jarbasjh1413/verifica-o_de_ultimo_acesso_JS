const dataU= new Date(2021,06,04); //data ultimo acesso em teoria 
const dataA= new Date();           // data atual

const hora=dataA.getHours();

const timeU= dataU.getTime();   //pegando o timestamp do ultimo acesso 
const timeA= dataA.getTime();   // pegando o timestamp da data atual

const diferenca= timeA-timeU;    // calculando a diferença

const MH=1000*60*60;  //hora
const MD= MH*24;     // dia
const MS=MD*7;       //semana

let msg=""

if (hora<6 || hora>=18){
    msg='Boa noite \n';
}else if (hora >=6 && hora<12){
    msg='Bom dia \n';
}else{
    msg='Boa tarde \n'
}
//maior que 1 semana
if(diferenca>MS){
    msg+='voce está fora a semanas!!';
//maior que 1 dia
} else if(diferenca>MD){
    msg+='Você está ausente a dias';
}else if(diferenca> MH){
    msg+='Voce está ausente a horas';
}else{
    msg+='Opa você está aqui agora , showwww!!';
}
console.log(msg);
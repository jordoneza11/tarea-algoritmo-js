function ejercicio1(){
// 1. Algoritmo que transforme de grados Celsius a Fahrenheit
const read = require('prompt-sync')();
gradoscelsius=read("Ingrese una temperatura en grados celsius")
gradoscelsius=parseFloat(gradoscelsius)
gradosfahrenheit=gradoscelsius*9/5+32
console.log(gradosfahrenheit) 
}

function ejercicio2(){
//2. Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número. 
const read = require('prompt-sync')();
numero=read("Ingrese un numero")
numero=parseInt(numero)
doble=numero*numero
triple=numero*numero*numero
console.log(doble)
console.log(triple)
}

function ejercicio3(){
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
numero3=read("Ingrese otro numero")
numero4=read("Ingrese otro numero")
numero1=parseFloat(numero1)
numero2=parseFloat(numero2)
numero3=parseFloat(numero3)
numero4=parseFloat(numero4)
producto=numero1*numero2*numero3*numero4
producto=parseFloat(producto)
console.log(producto)
suma=numero1+numero2+numero3+numero4
suma=parseFloat(suma)
console.log(suma)
mediaaritmetica=numero1+numero2+numero3+numero4/suma
mediaaritmetica=parseFloat(mediaaritmetica)
console.log(mediaaritmetica)
}

function ejercicio4(){
const read = require('prompt-sync')();
libras=read("Ingrese su peso en libras")
libras=parseFloat(libras)
let kilogramos=libras*2.205
kilogramos=parseFloat(kilogramos)
let gramos=libras*453.6
gramos=parseFloat(gramos)
console.log(kilogramos)
console.log(gramos)
}

function ejercicioo5(a, b, c) {
    let seno_a = Math.sin(a);
    let coseno_b = Math.cos(b);
    let suma_seno_coseno = seno_a + coseno_b;
    let trunc_a = Math.trunc(a);
    let mod_trunc_a = trunc_a % 2;
    let parte_1 = suma_seno_coseno * mod_trunc_a;
    let a_cubica = Math.pow(a, 3);
    let raiz_a_cubica = Math.sqrt(a_cubica);
    let denominador = (a * b) + c;
    let parte_2 = raiz_a_cubica / denominador;
    let x = parte_1 + parte_2;

    return x;
    
}
function ejercicio5(){
let a = 5.5;
let b = 3.3;
let c = 1.1;
let resultado = ejercicioo5(a, b, c);
console.log("El resultado de la expresión es:" ,resultado);
}

function calcularSalarios(horasTrabajadas) {
    const tarifaNormal = 5
    const tarifaSobretiempo = 10
    const horasNormales = 40
    const porcentajeSeguroSocial = 0.10
    let sueldoNormal = 0
    let sueldoSobretiempo = 0
    let horasSobretiempo = 0
    if (horasTrabajadas > horasNormales) {
        horasSobretiempo = horasTrabajadas - horasNormales
        sueldoNormal = horasNormales * tarifaNormal
        sueldoSobretiempo = horasSobretiempo * tarifaSobretiempo
    } else {
        sueldoNormal = horasTrabajadas * tarifaNormal
    }
    let ingresoTotal = sueldoNormal + sueldoSobretiempo
    let seguroSocial = ingresoTotal * porcentajeSeguroSocial
    let netoRecibir = ingresoTotal - seguroSocial
    return {
        sueldoNormal: sueldoNormal,
        sueldoSobretiempo: sueldoSobretiempo,
        ingresoTotal: ingresoTotal,
        seguroSocial: seguroSocial,
        netoRecibir: netoRecibir
        }
    }
function ejercicio6(){
let horasTrabajadas = 45;
let resultados = calcularSalarios(horasTrabajadas)
console.log("Sueldo por horas normales:" ,resultados.sueldoNormal)
console.log("Sueldo por horas de sobretiempo:" ,resultados.sueldoSobretiempo)
console.log("Ingreso total:" ,resultados.ingresoTotal)
console.log("Seguro social (10%):" ,resultados.seguroSocial)
console.log("Neto a recibir:" ,resultados.netoRecibir)
}

function ejercicio7(){
const read = require('prompt-sync')();
numero1=read("Ingrese un numero")
numero2=read("Ingrese otro numero")
numero1=parseInt(numero1)
numero2=parseInt(numero2)
if ((numero1%2===0) && (numero2%2!==0)){
    if (numero1>numero2){
    console.log("El mayor es" ,numero1)
    }
    else if (numero2>numero1){
        console.log("El mayor es" ,numero2)
    }
}
}

function ejercicio8(){
const read = require('prompt-sync')();
caracter=read("Ingrese un caracter")
if (caracter >= 'a' && caracter <= 'z'){
    console.log("El caracter está entre las letras 'a' y 'z'")
}
else if (caracter=",.;:"){
    console.log("El caracter es un signo de puntuación")
}
else{
    console.log("El caracter no está entre 'a' y 'z' ni es un signo de puntuacion")
}
}

function ejercicio9(){
const read = require('prompt-sync')();
colas=read("Ingrese la cantidad de colas")

if (colas<12){
    multiplicacion=colas*0.25
    console.log("Debe pagar un total de" ,multiplicacion)
}
else{
    multiplicacion1=colas*0.25
    menos=multiplicacion1*0.10
    resultado=menos-multiplicacion1
    resultado=Math.abs(resultado)
    console.log("Debe pagar un total de" ,resultado)
}
}

function ejercicio10(){
const read = require('prompt-sync')();
preciotraje=read("Ingrese el precio de su traje")
preciotraje=parseFloat(preciotraje)
iva=preciotraje*0.15
ivafinal=preciotraje+iva
if (preciotraje>200){
    descuento=ivafinal*0.10
    preciofinal=ivafinal-descuento
    console.log("Usted pago" ,preciotraje, "con un descuento del 10% y con el iva del 15% va a pagar un total de" ,preciofinal)
}
else{
    preciofinal1=ivafinal-10
    console.log("Usted pago" ,preciotraje, "con un descuento de 10 dolares y con el iva del 15% va a pagar un total de" ,preciofinal1)
}
}

function ejercicio11(){
const read = require('prompt-sync')();
arreglo=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
console.log(arreglo[2])
}

function ejercicio12(){
const read = require('prompt-sync')();
arreglo=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","diciembre"]
console.log(arreglo[4])
}

function ejercicio13(){
const read = require('prompt-sync')();
arreglo=["Martha","Juan","Pedro","Alex","Ernesto"]
console.log(arreglo[4],arreglo[3],arreglo[2],arreglo[1],arreglo[0])
}

function ejercicio14(){
    const read = require('prompt-sync')();
    console.log("Av. Clemente Baquerizo")
    console.log("Primer caracter: A")
    console.log("Medio caracter: e")
    console.log("Ultimo caracter: o")
}

function ejercicio15(){
const read = require('prompt-sync')();
arreglo=[Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10,Math.random()*10-20]
arreglo[0]=parseInt(arreglo[0])
arreglo[4]=parseInt(arreglo[4])
if ((arreglo[0]>0) && (arreglo[0]%2===0)) {
    console.log("Primer valor (par positivo):" ,arreglo[0]);
}
if ((arreglo[4]<0) && (arreglo[4]%2!==0)) {
    console.log("Último valor (impar negativo):" ,arreglo[4]);
}
}

// 16. Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.
// bosquejo
// entrada: nombres=[]
// proceso: añadir e ingresar los nombres a un arreglo
// salida: escribir nombres[0], primer caracter, ultimo caracter
//                  nombres[1], primer caracter, ultimo caracter
//                  nombres[2], primer caracter, ultimo caracter
function ejercicio16(){
    let nombres=[]
    nombres.push("Pedro")
    //            01234 
    nombres.push("Milton")
    //            012345
    nombres.push("Jorge")
    //            01234
    
    console.log (`Nombre: ${nombres[0]} Primer caracter: ${nombres[0][0]} Ultimo caracter: ${nombres[0][4]}`)
    console.log (`Nombre: ${nombres[1]} Primer caracter: ${nombres[1][0]} Ultimo caracter: ${nombres[1][5]}`)
    console.log (`Nombre: ${nombres[2]} Primer caracter: ${nombres[2][0]} Ultimo caracter: ${nombres[2][4]}`)
}

    
// 17.	Dada una cadena presentar el primer carácter siempre y cuando sea un digito
// bosquejo
// entrada:cadena=[]
// proceso:añadir e ingresar cadena a un arreglo
// si cadena [0] posicion[0]== 0 o 1 o 2 o 3 o 4 o 5 o 6 o 7 o 8 o 9  entonces
// escribir el primer caracter es un digito
// sino 
// escribir el primer caracter de la cadena no es un digito
// finsi
// salida:mostrar mensaje
function ejercicio17(){
    let cadena=[]
    cadena.push("8 meses")
    //           0123456
    if (cadena[0][0]=='0' ||cadena[0][0]=='1' ||cadena[0][0]=='2' ||cadena[0][0]=='3' ||cadena[0][0]=='4' ||cadena[0][0]=='5' ||cadena[0][0]=='6' ||cadena[0][0]=='7' ||cadena[0][0]=='8' ||cadena[0][0]=='9'){
       console.log("El primer caracter de la cadena es un digito")
}
    else{
        console.log("El primer caracter de la cadena no es un digito")
}
}

    
//18. Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra
//bosquejo
// entrada:cadena=[]
// proceso: añadir e ingresar cadena a un arreglo
//         si cadena [0] posicion [6]==a-z entonces
//           escribir El ultimo caracter de la cadena es una letra
//         sino
//         escribir El ultimo caracter de la cadena no es una letra
// finsi
// salida: mostrar mensaje
function ejercicio18(){
        let cadena=[]
    cadena.push("calculo")
    //           0123456
    if (cadena[0][6]=='a' ||cadena[0][6]=='b' ||cadena[0][6]=='c' ||cadena[0][6]=='d' ||cadena[0][6]=='e' ||cadena[0][6]=='f' ||cadena[0][6]=='g' ||cadena[0][6]=='h' ||cadena[0][6]=='i' ||cadena[0][6]=='j' ||cadena[0][6]=='k' ||cadena[0][6]=='l' ||cadena[0][6]=='m' ||cadena[0][6]=='n' ||cadena[0][6]=='o' ||cadena[0][6]=='p' ||cadena[0][6]=='q' ||cadena[0][6]=='r' ||cadena[0][6]=='s' ||cadena[0][6]=='t' ||cadena[0][6]=='u' ||cadena[0][6]=='v' ||cadena[0][6]=='w' ||cadena[0][6]=='x' ||cadena[0][6]=='y' ||cadena[0][6]=='z'){
       console.log("El ultimo caracter de la cadena es una letra")
}
    else{
        console.log("El ultimo caracter de la cadena no es una letra")
}
}

    
//19.	Dada una cadena presentar el primer carácter siempre y cuando sea una vocal
// bosquejo
//entrada:cadena=[]
// proceso: añadir e ingresar cadena a un arreglo
//          si cadena[0] posicion[0]==a-u entonces
//          escribir el primer caracter es una vocal
//          sino 
//          escribir el primer caracter no es una vocal
// finsi
// salida: mostrar mensaje
function ejercicio19(){
    let cadena =[]
    cadena.push("amistad")
    //           0123456
    if (cadena[0][0]=='a'|| cadena[0][0]=='e' || cadena[0][0]=='i'|| cadena[0][0]=='o'|| cadena[0][0]=='u'){
        console.log("el primer caracter es una vocal")
}
    else{
        console.log("el primer caracter no es una vocal")
}
}
    
    
//20.	Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracter de puntuación: “;” | “:” | “.” | “,”
// bosquejo
// entrada: cadena=[]
// proceso:  añadir e ingresar cadena a un arreglo
//           si cadena[0] posicion [2]==";" o ":" o "." o ","
//              escribir el caracter del medio es una puntuacion
//           sino
//           escribir el caracter del medio no es una puntuacion
// finsi
// salida:mostrar mensaje
function ejercicio20(){
let cadena =[]
cadena.push("10.25")
//           01234
if (cadena[0][2]==';'||cadena[0][2]==':' ||cadena[0][2]=='.'||cadena[0][2]==',' ) {
    console.log("el caracter del medio es una puntuacion")
} 
else{
    console.log("el caracter del medio no es una puntuacion")
}
}
   
    
//21.	Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo
//bosquejo
// entrada:caracteres=[]
// proceso: añadir e ingresar caracteres a un arreglo
//         si caracter[0]==caracteres[1] entonces
//         escribir los caracteres son iguales
//         sino si caracteres[0]<caracteres[1] entonces
//          escribir el primer caracter es menor que el segundo
//        sino
//        escribir el primer caracter es mayor que el segundo
// finsi
// salida: mostrar mensaje
function ejercicio21(){
    let caracteres =[]
    caracteres.push ("a")
    caracteres.push("k")
    if(caracteres[0]==caracteres[1]){
    console.log("los caracteres son iguales")
    }else if(caracteres[0]<caracteres[1]){
        console.log("el primer caracter es menor que el segundo")
    }else{
        console.log("el primer caracter es mayor que el segundo")
    }
}
    
    
//22. Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo
// bosquejo
// entrada: nombres=[]
// proceso: añadir e ingresar nombres a un arreglo
//           si nombres [0]== nombres[1] entonces
//           escribir Los nombres son iguales
//           sino si nombres[0]<nombres[1] entonces
//           escribir El primer nombre es menor que el segundo
//           sino
//           escribir
//           El primer nombre es mayor que el segundo
// finsi
// salida:mostrar mensaje
function ejercicio22(){
    let nombres=[]
    nombres.push("rosa")
    nombres.push("andres")
    
    if (nombres[0].length==nombres[1].length){          // para contar caracteres de cadena .length
        console.log("Los nombres son iguales")}
    
    else if (nombres[0].length<nombres[1].length){
        console.log("El primer nombre es menor que el segundo")
    
    } else {
        console.log("El primer nombre es mayor que el segundo")
    }
}

    
//23. Dado una cadena indicar cuantos elementos tiene, sin usar ciclos 
// bosquejo
// entrada: cadena=[]
// proceso: añadir e ingresar cadena a un arreglo
// salida: escribir cadena[0].longitud
function ejercicio23(){
    let cadena =[]
    cadena.push("algoritmo")             
    console.log(cadena[0].length)
}

    
//24. Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos
// bosquejo
// entrada: arreglo
// proceso: añadir elementos para arreglo
// salida: escribir arreglo.longitud
function ejercicio24(){
    let arreglo =[]
    arreglo.push (1, 5, 3, 7 ,9)
    console.log(arreglo.length)
}

console.log("1. Algoritmo que transforme de grados Celsius a Fahrenheit")
console.log("2.	Algoritmo que lea un numero entero, obtenga y presente el doble y el triple del número.")
console.log("3.	Diseñar un Algoritmo que lea 4 variables y calcule e imprima su producto, su suma y su media aritmética.")
console.log("4.	Diseñar un algoritmo que lea el peso de un hombre en libras y nos devuelva su peso en kilogramos y gramos(nota: una libra equivale a 0.453593 kilogramos)")
console.log("5.	Diseñar un algoritmo que resuelva la siguiente expresión matemática: x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))")
console.log("6.	Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora. Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal. El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo, sobretiempo, ingreso total, seguro social y el neto a recibir.")
console.log("7.	Algoritmo que pida dos números y presenta el mayor de los dos siempre y cando el primero sea par y el segundo impar")
console.log("8.	Leer un carácter y deducir si está o no comprendido entre las letras a y z ambas inclusive y sino verificar si es un signo de puntuacion , . ; : y si no presentar solo el carácter.")
console.log("9. Determinar cuánto se  debe pagar por x  cantidad de colas, considerando que si  son menos de 12 colas, el costo por unidad es de $0,25 caso  contrario el precio será  10% menos.")
console.log("10. El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200, se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares. Presentar el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.")
console.log("11. Dado un día en numero, presentar el nombre de ese día. Para la solución utilice arreglos.")
console.log("12. Dado un mes en número, presentar el nombre de ese mes. Para la solución utilice arreglos.")
console.log("13. Dado 5 nombres almacenarlo en un arreglo y luego presentar cada nombre del arreglo desde el ultimo al primero sin usar ciclos.")
console.log("14. Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el ultimo de dicha dirección.")
console.log("15. Almacenar 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.")
console.log("16. Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el ultimo carácter de cada nombre desde el arreglo.")
console.log("17. Dada una cadena presentar el primer carácter siempre y cuando sea un digito")
console.log("18. Dada una cadena presentar el ultimo carácter siempre y cuando sea una letra")
console.log("19. Dada una cadena presentar el primer carácter siempre y cuando sea una vocal")
console.log("20. Dada una cadena presentar el carácter de en medio, siempre y cuando sea un caracte de puntuación: “;” | “:” | “.” | “,”")
console.log("21. Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
console.log("22. Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo")
console.log("23. Dado una cadena indicar cuantos elementos tiene, sin usar ciclos ")
console.log("24. Dado un arreglo indicar cuantos elementos tiene, sin usar ciclos")

const read = require('prompt-sync')();
ejercicio=read("Elija la opcion del 1 al 24:")

if (ejercicio=="1"){
    console.log(ejercicio1())
}

if (ejercicio=="2"){
    console.log(ejercicio2())
}
if (ejercicio=="3"){
    console.log(ejercicio3())
}
if (ejercicio=="4"){
    console.log(ejercicio4())
}
if (ejercicio=="5"){
    console.log(ejercicio5())
}
if (ejercicio=="6"){
    console.log(ejercicio6())
}
if (ejercicio=="7"){
    console.log(ejercicio7())
}
if (ejercicio=="8"){
    console.log(ejercicio8())
}
if (ejercicio=="9"){
    console.log(ejercicio9())
}
if (ejercicio=="10"){
    console.log(ejercicio10())
}
if (ejercicio=="11"){
    console.log(ejercicio11())
}
if (ejercicio=="12"){
    console.log(ejercicio12())
}
if (ejercicio=="13"){
    console.log(ejercicio13())
}
if (ejercicio=="14"){
    console.log(ejercicio14())
}
if (ejercicio=="15"){
    console.log(ejercicio15())
}
if (ejercicio=="16"){
    console.log(ejercicio16())
}
if (ejercicio=="17"){
    console.log(ejercicio17())
}
if (ejercicio=="18"){
    console.log(ejercicio18())
}
if (ejercicio=="19"){
    console.log(ejercicio19())
}
if (ejercicio=="20"){
    console.log(ejercicio20())
}
if (ejercicio=="21"){
    console.log(ejercicio21())
}
if (ejercicio=="22"){
    console.log(ejercicio22())
}
if (ejercicio=="23"){
    console.log(ejercicio23())
}
if (ejercicio=="24"){
    console.log(ejercicio24())
}
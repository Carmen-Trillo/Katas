let name1="Carmen"
let name2="Ana"
let num1=5
let num2=4
let num3=6
let nombres=['Ana', 'Carmen','Paco','Diego', 'Mario', 'Martina', 'Jimena', 'Rosario', 'José', 'Miguel']
let numeros=[2,-5,7,-9,1,-4,-8,6,-6,-10]
let nombres2=['Ana','Carmen','Paco', 'Diego', 'Mario', 'Ana']

// Kata 1
console.log("¡Hola Mundo!");

// Kata 10
console.log("¡Hola "+name1+"!");

// Kata 1101
console.log("Hola "+name1+"! "+"Tu nombre tiene "+name1.length+" caracteres");

// Kata 11
console.log(num1*2);


// Kata 100
console.log(num1+num2);

// Kata 101
console.log(num1/2);

// Kata 110 
console.log(Math.max(num1,num2));

// Kata 111
console.log(Math.max(num1,num2,num3));

// Kata 1000
console.log(num1==num2);

// Kata 1001
console.log(name1==name2);

// Kata 1010

if((num1>0&&num2>0)||(num1<0&&num2<0)){
    console.log("True");
}else{
    console.log("False");
}

// Kata 1011
if((num1<0&&num2>0)||(num1>0&&num2<0)){
    console.log("True");
}else{
    console.log("False");
}

// Kata 1100
console.log(Math.max(5,67,89,54,23,44,75,12,14,34));

// Kata 1110
console.log(nombres.sort());

// Kata 1110
let negNumbers = numeros.filter(number => number < 0 );
console.log(negNumbers);

// Kata 10000
console.log(nombres2.length);

// Kata 10001
carNombres2=nombres2.join('');

console.log(carNombres2.length);

//Kata 10010
let ordNumeros=numeros.sort(function(a, b){return b-a});
let terMayor = ordNumeros[2];
console.log(terMayor);


//Bonus track

//Archi bonus track



//Ultra archi bonus track
function divDec(){
    let num=845;
    let result=num/17;
    return result.toFixed(4)
}
console.log(divDec());

//Ultra archi bonus track infinito
function sumar(num1,num2){
    if(typeof num1 !='number' ||typeof num2 != 'number'){
        return "Debe ingresar solo numeros"
    }
    return num1+num2
}
module.exports= sumar;

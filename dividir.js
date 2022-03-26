function division(num1,num2){
    if(typeof num1 !='number' ||typeof num2 != 'number'){
        return "Debe ingresar solo numeros"
    }
    else if(num2==0 || num1==0){
    return ("No se puede dividir por 0(Cero)")
    }
    return(num1/num2)
}
module.exports=division;
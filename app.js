const btnCalc = document.querySelector('.btn-calc');
const inputGetter = document.querySelector('.input-numbers');
const display_result = document.querySelector('.result');
const error_mensage = document.querySelector('.error-mensage');
const form = document.querySelector('#form-calc');


//button that makes the conversion happen
btnCalc.addEventListener('click',()=>{

    let if_is_binary = isBinary(inputGetter.value),
        conversion = binToDec(inputGetter.value);

        if(!if_is_binary || inputGetter.value === ''){
            error_mensage.textContent = 'Não introduza número inválido ou tentar enviar campo vazio!'
            display_result.textContent = 0
        }else{

            display_result.textContent = conversion
        }
    
    
    
    inputGetter.value = '';
})



//check if the number entered is binary
inputGetter.addEventListener('keyup',()=>{
    let size = inputGetter.value.length - 1,
        newValue = inputGetter.value[size],
        decimal = [2,3,4,5,6,7,8,9];

    if(!(isBinary(inputGetter.value))){
        
      newValue = inputGetter.value
      newValue = newValue.replace(newValue[size],'') 
        
      inputGetter.value = newValue
    }
})



//converter function
function binToDec(value){

    if(isBinary(value)){
               //varíavel que vai armazenar o resultado
               let sum = 0;
               //Transforming into array
               let binary_array = value.split('');
               //reverse binary_array array
               binary_array = binary_array.reverse();
               //get array size
               let size = (binary_array.length - 1);
       
               for(let counter = size; counter >= 0; counter--){
                   sum += (binary_array[counter]*(2**counter));//this is the expression conversor
               }
               return sum;
    }else{
        return 'there is not valid binary';
    }

  
}

//function to verify if binary
function isBinary(value){

    let
        is_bin = 0,
        numbers = value.split(''),
        array_size = value.length - 1,
        decimal_numbers = [2,3,4,5,6,7,8,9];

    //verify if the input values is binary
    for(let i = 0; i <= array_size; i++){
        let response = (decimal_numbers.indexOf(Number(numbers[i])))==-1?true:false;
        if(response){
            is_bin++;
        }
    }

    if(is_bin == (array_size+1)){
        return true;
    }else{
        return false;
    }

}
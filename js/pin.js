
document.getElementById('generate-pin').addEventListener('click' , function(){
    generateRandom();
    pinGenerate();
})
function generateRandom (){
   const pin =  Math.round(Math.random()*10000)
   return pin
}


function pinGenerate (){
    const pin = generateRandom()
    
    const generatePin = pin +'';
    if(generatePin.length < 4){
        pinGenerate()
    }
    else{
        
       const pinText = document.getElementById('pin-display')
       pinText.value= pin
    }
}

document.getElementById('calculalor').addEventListener('click' , function(events){
    const digits = events.target.innerText
    const number = document.getElementById('digit-display')

    if (isNaN(digits)){
        if(digits === 'C'){
            number.value=''
        }
        else if (digits === '<'){
            const previousNumber = number.value
            
            const current = previousNumber.split('')
            current.pop()
            
            number.value = current.join('')    

        }
    }
    else{
         number.value = number.value+digits
    }
   
})




document.getElementById('submit').addEventListener('click' , function(){
    const generatedPin= document.getElementById('pin-display')
    const calculaledPin = document.getElementById('digit-display') 
    
 
   
    const correctMessage = document.getElementById('pin-correct')
    const wrongMessage = document.getElementById('pin-wrong')
    
    
    if(generatedPin.value === calculaledPin.value){   
    correctMessage.style.display = 'block'
    wrongMessage.style.display = 'none'
   }
   else{
    correctMessage.style.display = 'none'
    wrongMessage.style.display = 'block'
   }


})


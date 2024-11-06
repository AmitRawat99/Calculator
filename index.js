        const buttons = document.querySelectorAll('input')
        let display = document.getElementById('firstInput')
        const btns = Array.from(buttons)
        let string = ''

        btns.forEach(function(btnsary){
            btnsary.addEventListener('click',(e)=>{
              if(e.target.value == 'DE'){
                string = string.substring(0 ,string.length-1)
                display.value = string;
              }
              else if(e.target.value == 'AC'){
                string =  ' '
                display.value = string;
              }
              else if(e.target.value == '='){
                string = eval(string)
                display.value = string; 
              }
             else{
              string += e.target.value
              display.value = string
             }
            })
        })
        

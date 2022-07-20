let output=document.getElementById("output");
let buttons=Array.from( document.getElementsByClassName("button"))
buttons.map(button=>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                output.innerText='';
                break;
            case '←':
                if (output.innerText){
                    output.innerText=output.innerText.slice(0,-1);
                } 
                break;   
            case '=':
                output.innerText =eval(output.innerText)
                break; 
            default:
                output.innerText+=e.target.innerText;    
            
        }
    })
})
    

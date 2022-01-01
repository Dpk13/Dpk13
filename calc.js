var button =document.getElementsByClassName("buttons");
var display=document.getElementById("display");
var op1=0;
var op2=null;
var operator=null;

console.log('calc.js');


for(var i=0;i<button.length ; i++){
    
    button[i].addEventListener('click',function(){

       var value=this.getAttribute('data-value');
         var text=display.textContent;
        if(value=='+' || value=='-' || value=='*' || value=='/'){
            op1=parseFloat(text);
            operator=value;
            display.innerText=""; 

        }else if(value=='ac'){
           display.innerText="";
        }else if(value=='%'){
           op1=parseFloat(text);
           op1= op1 / 100;
           display.innerText=op1;
        }else if(value=='sign'){
           op1=parseFloat(text);
           op1= -1 * op1;
           display.innerText=op1;
        }else if(value=='='){
           op2 = parseFloat(text);
            var ans = eval(op1 + ' ' + operator + ' ' + op2);
            if (ans) {
                display.textContent = ans;
                op1 = ans;
                op2 = null;
                operator = null;
            }
        }else if(value=='.'){
          
            if(text.length && !text.includes('.')){
                display.innerText=text+'.' ;
            }
        }else{
              display.innerText+=value;
        }


    });
}
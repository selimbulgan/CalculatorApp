let keys = document.getElementsByClassName("button");
let screen = document.getElementsByClassName("screen")[0];

for (var i = 0; i < keys.length; i++){    
  if(i < 14){
  keys[i].addEventListener("click",type);
  }
}

function type(){
 if (screen.innerHTML.length < 29){
   screen.innerHTML = screen.innerHTML + this.innerHTML;
      
    if(this.innerHTML == "+" ||
       this.innerHTML == "-" ||
       this.innerHTML == "/" || 
       this.innerHTML == "*")
       
      {if(screen.innerHTML[screen.innerHTML.length-2]=="+" ||
      screen.innerHTML[screen.innerHTML.length-2]=="-" ||
      screen.innerHTML[screen.innerHTML.length-2]=="/" ||
      screen.innerHTML[screen.innerHTML.length-2]=="*")

        {screen.innerHTML = screen.innerHTML.slice(0,-2);
         screen.innerHTML = screen.innerHTML + this.innerHTML;}
    }
  }
}

keys[14].addEventListener("click",calculate);

function calculate(){
  screen.innerHTML = eval(screen.innerHTML);
}



keys[15].addEventListener("click",clear);

function clear(){
  screen.innerHTML = "";
}

function fun(){
    const p=document.getElementById("para");
    const b=document.getElementById("bg");
    if(p.style.display==='none'){
        p.style.display="block";
        b.innerHTML="hide text";
    }    
    else{
        p.style.display="none";
        b.innerHTML="show text";
    }
   }

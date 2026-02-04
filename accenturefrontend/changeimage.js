let i=0;
function fun1(){
    let x=document.getElementById("img");
    if(i==0){
        x.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1zwhySGCEBxRRFYIcQgvOLOpRGqrT3d7Qng&s";
        i=1;
    }
    else{
        x.src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg";
        i=0;
    }
}
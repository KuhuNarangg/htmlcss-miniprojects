function fun(){
    const x=document.getElementById("listitems");
    if(x.value===""){
        alert("enter an element");
        return;
    }
    let li=document.createElement("li");
    li.innerHTML=x.value;
    document.getElementById("items").appendChild(li);
    x.value="";
}
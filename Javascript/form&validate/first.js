function validateForm(){
    const uname=document.getElementById("uname").value;
    const p=document.getElementById("pass").value;
    if(uname===""){
        alert("Username cannot be empty");
        return false;
    }
    if(p.length<6){
        alert("Password must be at least 6 characters long");
        return false;
    }
    alert("Form submitted successfully");
    return true;
    //wanna chnage anything,moved on from somethingmended somethinh in life
    //heartbreak,betral,subconsciousness mei serius thi, have to mve on t
    //god is with you
}
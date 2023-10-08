

function checkpass(){
    let password = document.forms["myForm"]["pass"].value;
    if  (password === "frankbutt"){
        document.getElementById("t-script").style.display= 'block';
    //     document.getElementById("my-element").style.visibility = "toggle";
        // document.getElementById("error").style.display= 'none';
    }
    else{
        // document.getElementById("error").style.display= 'display';
        alert(password + " is wrong");
        //document.getElementById("t-script").style.display= 'none';
    }
}
function goproj(){
    let proj = document.forms["pForm"]["project"].value;
    if(proj === "github"){
        
        window.location.replace("https://github.com/MarcoPolo987");
    }
    else{
        window.location.replace("https://www.linkedin.com/in/marcus-lang-4a5262221/");
    }
    
}
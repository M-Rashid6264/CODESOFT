function valuebutton(e){ // to take and understand the button values
    document.getElementById("screen").value += e.value;
};
function clar(){// To clear the screen
    document.getElementById("screen").value = "";
}
function calculate(){// to take the input values and operator and perform operation
    try{
        const result = eval(document.getElementById("screen").value);
        document.getElementById("screen").value = result;
    } catch(error){
        document.getElementById("screen").value = "Error";
    }
}
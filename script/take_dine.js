function takeaway_click(P) {
    var takeaway_beforeclick = document.getElementsByClassName("take-away");
    var takeaway_afterclick = document.getElementsByClassName("take-away-afterclick");
    var input_name = document.getElementsByClassName("name");
    
    var dineinVisible = document.getElementsByClassName("dine-in-afterclick")[0].style.display !== "none";

    if (P == 1 && !dineinVisible) {
        takeaway_beforeclick[0].style.display = "none";
        takeaway_afterclick[0].style.display = "";
        input_name[0].focus();
    }
    else if (P == 2) {
        takeaway_beforeclick[0].style.display = "";
        takeaway_afterclick[0].style.display = "none";
        input_name[0].value = "";
    }
}

function dinein_click(P) {
    var dinein_beforeclick = document.getElementsByClassName("dine-in");
    var dinein_afterclick = document.getElementsByClassName("dine-in-afterclick");
    var input_table = document.getElementsByClassName("table");

    // Check if the takeaway_afterclick elements are not visible
    var takeawayVisible = document.getElementsByClassName("take-away-afterclick")[0].style.display !== "none";
    
    if (P == 1 && !takeawayVisible) {
        dinein_beforeclick[0].style.display = "none";
        dinein_afterclick[0].style.display = "";
        input_table[0].focus();
    } else if (P == 2) {
        dinein_beforeclick[0].style.display = "";
        dinein_afterclick[0].style.display = "none";
        input_table[0].value = "";
    }
}

function send_take_dinein(){
    var input_name = document.getElementsByClassName("name");
    var input_table = document.getElementsByClassName("table");
    if(input_name[0].value == "" && input_table[0].value == ""){
        alert("Please enter your name or table number");
    }

    // input name not Special Character
    var regex = /^[a-zA-Z]*$/;
    if(!regex.test(input_name[0].value)){
        alert("Please enter your name not Special Character and not Number");
    }

    // input table not Character 
    var regex = /^[0-9]*$/;
    if(!regex.test(input_table[0].value)){
        alert("Please enter your table not Character");
    }

    if(input_name[0].value != ""){
        console.log(input_name[0].value);
    }
    if(input_table[0].value != ""){
        console.log(input_table[0].value);
    }
}

function validateForm() {
    var x = document.forms["myForm"]["first"].value;
    if (x == "") {
      alert("First Name is Required!");
      return false;
    }

    var x = document.forms["myForm"]["last"].value;
    if (x == "") {
      alert("Last Name is Required!");
      return false;
    }

    var x = document.forms["myForm"]["Cellnumber"].value;
    if (x == "") {
      alert("Cell Number is Required!");
      return false;
    }
    
    var x = document.forms["myForm"]["Cellnumber"].value;
    if (x.length != "13") {
      alert("Cell Number must contain 13 digits!");
      return false;
    }

    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email ID is Required!");
      return false;
    }

    function ValidateEmail(email) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
    
    

    var x = document.forms["myForm"]["pass"].value;
    if (x == "") {
    alert("Password is Required!");
    return false;
}

    var x = document.forms["myForm"]["pass"].value;
     if (x.length > 13 || x.length < 5) {
        alert("Password must contain 5-12 Elements!");
        return false;
}

    var x = document.forms["myForm"]["month"].value;
    if (x == "Month") {
   alert("Birth Month is Required!");
   return false;
} 

    var x = document.forms["myForm"]["day"].value;
    if (x == "Day") {
   alert("Birth Day is Required!");
   return false;
} 

    var x = document.forms["myForm"]["year"].value;
    if (x == "Year") {
   alert("Birth Year is Required!");
   return false;
} 

    var x = document.forms["myForm"]["checkbox"].value;
    if (x == "0") {
   alert("Birth Month is Required!");
   return false;
} 
}



function showTableData() {
    document.getElementById('info').innerHTML = "";
    var myTab = document.getElementById('tbl');

    for (i = 1; i < myTab.rows.length; i++) {

        var objCells = myTab.rows.item(i).cells;

        for (var j = 0; j < objCells.length; j++) {
            info.innerHTML = info.innerHTML + ' ' + objCells.item(j).innerHTML;
        }
        info.innerHTML = info.innerHTML + ' <br /> &nbsp <br /> ';     
    }
}


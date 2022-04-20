function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password")
     {
      x.type = "text";
    } 
    else 
    {
      x.type = "password";
    }
}
function myFunction2() {
  var x = document.getElementById("cpassword");
  if (x.type === "password")
   {
    x.type = "text";
  } 
  else 
  {
    x.type = "password";
  }
}
function validateForm() {
  let a = document.forms["myForm"]["pass"].value;
  let b = document.forms["myForm"]["cpass"].value;
  if (a != b) {
    alert("password and confirm password must be same");
    return false;
  }
}

function verify_password()
{
    var password = document.getElementById('pass1');
    var pass2= document.getElementById('pass2');
    var message = document.getElementById('validation-result');
 if(password.value != pass2.value){
// console.log("Password does not match");
message.innerHTML = "Password does not match";
}
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }  
  function filterData(){
       var input, filter, table, tr, td,i,txtVlue;
       input = document.getElementById("myInput");
       filter = input.value.toUpperCase();
       table = document.getElementById("myTable");
       tr = table.getElementsByTagName("tr");

       for(i = 0; i<tr.length; i++){
           td = tr[i].getElementsByTagName("td")[1];
           if(td){
               txtVlue=td.textContent || td.innerText;
               if(txtVlue.toUpperCase().indexOf(filter) > -1) {
                   tr[i].style.display ="";
               }
               else{
                   tr[i].style.display="none";
               }
           }
       }
  }
  function filterDestination(){
    var input, filter, table, tr, td,i,txtVlue;
    input = document.getElementById("keyword");
    filter = input.value.toUpperCase();
    table = document.getElementById("destTable");
    tr = table.getElementsByTagName("tr");

    for(i = 0; i<tr.length; i++){
        td = tr[i].getElementsByTagName("td")[3];
        if(td){
            txtVlue=td.textContent || td.innerText;
            if(txtVlue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display ="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
}

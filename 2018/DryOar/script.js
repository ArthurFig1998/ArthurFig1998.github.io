function checkType()
{
  var email = document.getElementById('email');
  var phone = document.getElementById('phone');
  var emailType = document.getElementById('emailType');
  var phoneType = document.getElementById('phoneType');
  
  if(email.checked)
  {
      emailType.style.display = "block";
      phoneType.style.display = "none";
  }
  else if(phone.checked)
  {
    
      phoneType.style.display = "block";
      emailType.style.display = "none";
  }
    
}

              
function jack()
{
   var jacksonSec = document.getElementById('jacksonHoleSec');
   var yellowSec = document.getElementById('yellowstoneSec');
       
   jacksonSec.style.display = "block";
   yellowSec.style.display = "none";
}
    
function yellow()
{
        
   var jacksonSec = document.getElementById('jacksonHoleSec');
   var yellowSec = document.getElementById('yellowstoneSec');
        
   jacksonSec.style.display = "none";
   yellowSec.style.display = "block";
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function toggleNav() {
    var updateElement = document.getElementById("menu-icon");
    var updateElement1 = document.getElementById("myTopnav");
    //toggle adds a class if it's not there or removes it if it is.
    updateElement.classList.toggle("open");
    updateElement1.classList.toggle("open");
}              

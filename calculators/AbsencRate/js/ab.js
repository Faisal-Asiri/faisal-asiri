function validate() {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

function Calculate()
{
var ch = document.getElementById('ch').value;
var cp = document.getElementById('cp').value; 
var newCp=cp/10;
var cal=1.5;
var Result=cal*newCp*ch;
document.getElementById('result').innerHTML =Result;

 
   }
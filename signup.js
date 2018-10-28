

function checkForm(){
    return validusername() && validname() && validpassword() && validrepassword() && validaddress(); 
}

function validusername(){
        var pass=1;
        var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
        var elem = document.querySelector("#name1");
        var input = elem.value.trim();
        input=input.toUpperCase();
        if (input.length == 0) {     
           document.querySelector('#nameerror').innerHTML="No input! \n";
		   return false;
        }
        for (var i = 0; i < input.length; i++) {
          var flag = 0;    
          if (input.matches("^[a-zA-Z0-9]+$")){
                flag = 1;
          }
          if (flag!=1){
                document.querySelector('#nameerror').innerHTML="invalid character!\n"; 
                return false;
          }
        
          if (str.indexOf(input.substr(i,1)) < 0){    
                document.querySelector('#nameerror').innerHTML="Please enter at least 1 alphabetic character!";
                return false;
          } 
        }      
        pass=0;
        if (pass==0){
           document.querySelector('#nameerror').innerHTML="";
        }    
       return true;
}


function validname(){
        var pass=1;
        var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
        var elem = document.querySelector("#name2");
        var input = elem.value.trim();
        input=input.toUpperCase();
        if (input.length == 0) {     
           document.querySelector('#nameerror2').innerHTML="No input! \n";
		   return false;
        }
        for (var i = 0; i < input.length; i++) {
          var flag = 0;    
          if (input.matches("^[a-zA-Z0-9]+$")){
              flag = 1;
          }
          if (flag!=1){
                document.querySelector('#nameerror2').innerHTML="invalid character!\n"; 
                return false;
          }          
          if (str.indexOf(input.substr(i,1)) < 0){    
                document.querySelector('#nameerror2').innerHTML="Please enter at least 1 alphabetic character!";
                return false;
          }      
       } 
       pass=0;
       if (pass==0){
           document.querySelector('#nameerror2').innerHTML="";
       }    
       return true;
}

function validpassword(){
        var pass = 1;   
        var elem = document.querySelector("#ps1");
        var input = elem.value.trim();
        if (input.length == 0) {     
		   document.querySelector('#pserror').innerHTML="No input! \n";
           input.focus();
		   return false;
        }
        if (input.length < 8) { 
            document.querySelector('#pserror').innerHTML="Please enter at least 8 characters!";
            input.focus();
			return false; 
         }
        pass=0;
       if (pass==0){
           document.querySelector('#pserror').innerHTML="";
       }    
        return true;
}


function validrepassword(){
        var pass = 1;     
        var pass1 = document.querySelector("#ps1");
        var pass2 = document.querySelector("#ps2"); 
        var input1 = pass1.value.trim();
        var input2 = pass2.value.trim();
        if (input2.length == 0) {     
		   document.querySelector('#pserror2').innerHTML="No input! \n";
           input2.focus();
		   return false;
        }
        if (input2.length < 8) { 
            document.querySelector('#pserror2').innerHTML="Please enter at least 8 characters!";
            input2.focus();
			return false; 
         }
       if(input1.length!=0 && input2.length!=0 && input1!=input2){
            document.querySelector('#pserror2').innerHTML="Password and Retype Password are not the same!";
            return false;
       }
         pass=0;
       if (pass==0){
           document.querySelector('#pserror2').innerHTML="";
       }    
        return true;
}

function validaddress(){
    var pass=1;
    var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
    const array = [NaN];
    var elem = document.querySelector("#address");
    var input = elem.value.trim();
    input=input.toUpperCase();
    if (input.length == 0) {     
       document.querySelector('#nameerror').innerHTML="No input! \n";
       return false;
    }
    for (var i = 0; i < input.length; i++) {
      var flag = 0;    
      if (input.matches("^[a-zA-Z0-9]+$")){         
            flag = 1;
      }
      if (flag!=1){
            document.querySelector('#nameerror').innerHTML="invalid character!\n"; 
            return false;
      }
      if (str.indexOf(input.substr(i,1)) < 0){    
            document.querySelector('#nameerror').innerHTML="Please enter at least 1 alphabetic character!";
            return false;
      }      
   } 
   pass=0;
   if (pass==0){
       document.querySelector('#nameerror').innerHTML="";
   }    
   return true;
           
}

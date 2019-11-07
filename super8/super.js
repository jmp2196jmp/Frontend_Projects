// all fields are empty
function fill()
{
     var nam=document.getElementById('name');
     if(nam.value.length<1)
       {
       document.getElementById('nm').innerHTML =" Field is required";
       }
     else
        {
        document.getElementById('nm').innerHTML ="";
        }


     var ema=document.getElementById('email');
     if(email.value.length<1)
       {
      document.getElementById('em').innerHTML =" Field is required";
       }
       else
       {
          document.getElementById('em').innerHTML ="";
       }

     var passw=document.getElementById('pass');
     if(passw.value.length<1)
       {
         document.getElementById('ps').innerHTML =" Field is required";
       }
       else
        {
       document.getElementById('ps').innerHTML ="";
        }


       var cn=document.getElementById('cp');
      if(cn.value.length<1)
         {
           document.getElementById('cps').innerHTML =" Field is required";
         }
         else
          {
           document.getElementById('cps').innerHTML ="";
         }

       var dobt=document.getElementById('dob');
        if(dobt.value.length<1)
         {
           document.getElementById('bo').innerHTML =" Field is required";
         }
         else
          {
          document.getElementById('bo').innerHTML ="";
         }

       var sbio=document.getElementById('bio');
       if(sbio.value.length<1)
             {
               document.getElementById('tx').innerHTML =" Field is required";
             }
             else
              {
             document.getElementById('tx').innerHTML ="";
              }
 }
//checking the length of character
function passcheck() {
  var p=document.getElementById('pass');
  if(p.value.length<8)
  {
    document.getElementById('ps').innerHTML ="Atleast 8 characters";
  }
  else
   {
    document.getElementById('ps').innerHTML ="";
  }

}


//matching passwords
function conpass() {
  var con=document.getElementById('cp')
  var pa=document.getElementById('pass')
  if(con.value!==pa.value)
  {
    document.getElementById('cps').innerHTML ="Doesnot match";
  }
  else
  {
    document.getElementById('cps').innerHTML ="";
  }
}

// no. of letters in textarea
function letcount()
  {
      var c=document.getElementById("bio").value.length;
      if(140-c>=0)
      {
      document.getElementById("count").innerHTML=140-c;
      }
      else
      {
        document.getElementById("tx").innerHTML =" character exceeded";
        }
  }

  //dob verification
function verify() {
    var a=new Date();
    //console.log(a.getFullYear());
    var m=a.getFullYear();
    var b=document.getElementById('dob').value;
    var d=new Date(b);
    //console.log(d.getFullYear());
   var n= d.getFullYear();
   var y=m-n;
    //console.log(y);
   if(y>=18)
   {
       document.getElementById('bo').innerHTML ="";
   }
   else
   {
     var msg=('<input type="checkbox"> you are under 18 click the box');// to print checkbox
      document.getElementById('bo').innerHTML =msg;
   }
};

//checking email id
function mailcheck(){
  var emal=$("#email").val();
  if(emal.includes("@")&&emal.includes("."))
  {
    document.getElementById('em').innerHTML ="";
  }
  else
  {
    document.getElementById('em').innerHTML =" Invalid Email";
  }
}

function Validate(event)
{
    event.preventDefault();
    var n1=document.getElementById('n').value;
    var un1=document.getElementById('un').value;
    var em1=document.getElementById('em').value;
    var pn1=document.getElementById('pn').value;
    var ps1=document.getElementById('ps').value;
    var cp1=document.getElementById('cp').value;
    var g1=document.querySelector('input[name="gender"]:checked').value;
    console.log("gender:"+g1);
    if(n1=="" || un1=="" || em1=="" || pn1=="" ||ps1=="" ||cp1=="")
        {
            console.log("Fill the required details");
            window.alert("Fill All the Required Details🤦‍♀️ ");
        }
    else if(ps1!=cp1)
        {
            window.alert("password is not Matching❌😒");
        }
    else{
        window.confirm("You have Registered Sucessfully👍🤩");
    }
    

}
    

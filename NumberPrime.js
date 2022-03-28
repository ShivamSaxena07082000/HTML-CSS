function check()
{
    var num = parseInt(document.getElementById("box").value);
    var i,flag=0;
        for(i=2;i<num;i++)
        {
             if(num%i==0)
             {
                 flag=1;
                 break; 
             }
        }
        if(flag==0)
        {
            alert(num+" "+"is Prime");
        }
        else
        {
             alert(num+" "+"is not prime");
        }
}
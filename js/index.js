function firstToSecond()
{
    var input1=document.getElementById("firstcurrecy").value;
    var input2=document.getElementById("secondcurrecy").value;
    if(document.getElementById("inputcurrency").value=='Taka')
    {

        if(document.getElementById("outputcurrency").value=='Taka1')
        {
            document.getElementById("secondcurrecy").value=input1*1;
        }


       else if(document.getElementById("outputcurrency").value=='Derham1')
        {
            document.getElementById("secondcurrecy").value=input1*23.10;
        }



        else if(document.getElementById("outputcurrency").value=='Doller1')
        {
            document.getElementById("secondcurrecy").value=input1*84.85;
        }



        else if(document.getElementById("outputcurrency").value=='Rupee1')
        {
            document.getElementById("secondcurrecy").value=input1*1.17;
        }
    }


    if(document.getElementById("inputcurrency").value=='Derham')
    {

        if(document.getElementById("outputcurrency").value=='Taka1')
        {
            document.getElementById("secondcurrecy").value=input1*23.10;
        }


       else if(document.getElementById("outputcurrency").value=='Derham1')
        {
            document.getElementById("secondcurrecy").value=input1*1;
        }



        else if(document.getElementById("outputcurrency").value=='Doller1')
        {
            document.getElementById("secondcurrecy").value=input1*0.27;
        }



        else if(document.getElementById("outputcurrency").value=='Rupee1')
        {
            document.getElementById("secondcurrecy").value=input1*19.77;
        }
    }



    if(document.getElementById("inputcurrency").value=='Doller')
    {

        if(document.getElementById("outputcurrency").value=='Taka1')
        {
            document.getElementById("secondcurrecy").value=input1*84.85;
        }


       else if(document.getElementById("outputcurrency").value=='Derham1')
        {
            document.getElementById("secondcurrecy").value=input1*3.67;
        }



        else if(document.getElementById("outputcurrency").value=='Doller1')
        {
            document.getElementById("secondcurrecy").value=input1*1;
        }



        else if(document.getElementById("outputcurrency").value=='Rupee1')
        {
            document.getElementById("secondcurrecy").value=input1*72.62;
        }
    }


    if(document.getElementById("inputcurrency").value=='Rupee')
    {

        if(document.getElementById("outputcurrency").value=='Taka1')
        {
            document.getElementById("secondcurrecy").value=input1*1.17;
        }


       else if(document.getElementById("outputcurrency").value=='Derham1')
        {
            document.getElementById("secondcurrecy").value=input1*0.51;
        }



        else if(document.getElementById("outputcurrency").value=='Doller1')
        {
            document.getElementById("secondcurrecy").value=input1*0.014;
        }



        else if(document.getElementById("outputcurrency").value=='Rupee1')
        {
            document.getElementById("secondcurrecy").value=input1*1;
        }
    }

}
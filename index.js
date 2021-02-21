function takeinput(num)
{
if(num==10)
{
   document.getElementById("input").innerHTML+=".";
}
else
document.getElementById("input").innerHTML+=num;
}
let num1,op;
function plus()
{
let num=document.getElementById("input").innerText;
document.getElementById("input").innerHTML="";
if(Number(num)!='NaN')
{
num1=Number(num);
op='+';
}
else
{
    alert("wrong input");
}
};
function minus()
{
let num=document.getElementById("input").innerText;
document.getElementById("input").innerHTML="";
if(Number(num)!='NaN')
{
num1=Number(num);
op='-';
}
else
{
    alert("wrong input");
}
};
function divide()
{
let num=document.getElementById("input").innerText;
document.getElementById("input").innerHTML="";
if(Number(num)!='NaN')
{
num1=Number(num);
op='/';
}
else
{
    alert("wrong input");
}
};
function multiply()
{
let num=document.getElementById("input").innerText;
document.getElementById("input").innerHTML="";
if(Number(num)!='NaN')
{
num1=Number(num);
op='*';
}
else
{
    alert("wrong input");
}
};

function ans()
{
    let ans=0;
    let num2=document.getElementById("input").innerText;
    if(Number(num2)!='NaN')
    {
    num2=Number(num2);
    if(op == '+')
    {
        ans=num2+num1;
        document.getElementById("input").innerHTML=ans;
    }
    else if(op=='-')
    {
        ans=num1-num2;
        document.getElementById("input").innerHTML=ans;
    }
    else if(op=='/')
    {
        if(num1==0 && num2==0)
        document.getElementById("input").innerHTML="infinity";
        else if(num2==0)
        document.getElementById("input").innerHTML="NaN";
       ans=num1/num2;
        document.getElementById("input").innerHTML=ans;
    }
    else if(op=="*")
    {
        ans=num1*num2;
        document.getElementById("input").innerHTML=ans;
    }
    else
    {
        alert("wrong input");
    }
}
    else
    {
        alert("wrong input");
    }
};
function clearscreen()
{

    document.getElementById("input").innerHTML="";
};
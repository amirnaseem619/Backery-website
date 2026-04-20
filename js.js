var manubtn=document.getElementById("manubtn")
    var snav=document.getElementById("snav")
    var manu=document.getElementById("manu")

snav.style.right="-250px";

manubtn.onclick=function()
{
    if(snav.style.right=="-250px")
    {
        snav.style.right="0";
        manu.src="img/mark.png";
    }
    else 
    {
        snav.style.right="-250px";
        manu.src="img/manu.png";
    }
}

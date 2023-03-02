const panels=document.getElementsByClassName("panel");
// console.log(panels[1]);



for(let i=0;i<panels.length;i++)
{
    panels[i].addEventListener("click",()=>{

        removeActiveclasses();
        panels[i].classList.add('active');
    })
}


function removeActiveclasses()
{
    for(let i=0;i<panels.length;i++)
    {
        panels[i].classList.remove('active');
    }

}
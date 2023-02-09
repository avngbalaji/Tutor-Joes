document.addEventListener("DOMContentLoaded", ()=>{

    const bRadius=document.getElementById('b-radius');
    const brval=document.getElementById('brval');
    const bWidth=document.getElementById('b-width');
    const bwval=document.getElementById('bwval');
    const bStyle=document.getElementById('b-style');
    const code=document.getElementById('code');
    const container=document.getElementById('container');
    const btnCopy=document.getElementById('btnCopy');

    var radius=20;
    var width=3;
    var style="solid";
    var coding;

    function update(){
        radius=bRadius.value;
        brval.innerText=radius+'px';
        width=bWidth.value;
        bwval.innerText=width+'px';
        coding=`border-radius: ${radius}px;
border-width: ${width}px;
border-color: red;
border-style: ${style};`
        code.value=coding;

        container.style.cssText=coding;
    }

    bRadius.addEventListener("mousemove", update);
    bRadius.addEventListener("change", update);
    bWidth.addEventListener("mousemove", update);
    bWidth.addEventListener("change", update);

    btnCopy.addEventListener("click", ()=>{
        document.querySelector('textarea').select();
        document.execCommand('copy');
        alert("code copied");
    });

    bStyle.addEventListener("change", function(){
        style=this.value;
        update();
    })

    update();
    
});
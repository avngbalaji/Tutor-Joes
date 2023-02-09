window.onload=function(){
    const btnOpen=document.querySelector(".btnOpen");
    const btnClose=document.querySelector(".btnClose");
    const container=document.querySelector(".content-container");

    btnOpen.addEventListener('click',function(){
        container.classList.add('show');
    });
    btnClose.addEventListener('click',function(){
        container.classList.remove('show');
    });
    
}
var menuitem = document.getElementById("menuitem");
menuitem.style.maxHeight = "0";

function menutoggle(){
    if(menuitem.style.maxHeight == "0px"){
        menuitem.style.maxHeight = "200px";
    }else{
        menuitem.style.maxHeight = "0";
    }
}

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
})
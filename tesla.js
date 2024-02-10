const main=document.querySelector(".main-1");
const menu = document.querySelector("#menu");
const cross =document.querySelector(".fa-xmark");
const blurs=document.querySelector(".blur")
const sidee = document.querySelector(".side");
menu.addEventListener('click' ,() => {

blurs.classList.add("active");
sidee.classList.add("active");

})
cross.addEventListener("click" , () => {
   blurs.classList.remove("active");
   sidee.classList.remove("active");

})

const h1 =document.querySelector(".head-1");
const h2 =document.querySelector(".head-2");
const h3 =document.querySelector(".head-3");
const h4 =document.querySelector(".head-4");
const h5 =document.querySelector(".head-5");
const h6 =document.querySelector(".head-6");
const h7 =document.querySelector(".head-7");

const l1 =document.querySelector("login-1");
const l2 =document.querySelector("login-2");
const l3 =document.querySelector("login-3");
const l4 =document.querySelector("login-4");
const l5 =document.querySelector("login-5");
const l6 =document.querySelector("login-6");
const l7 =document.querySelector("login-7");
main.addEventListener("scroll" , ()=>{
   console.log(main.scrollTop);
   const u =main.scrollTop;
   if(u==0 && u<100){
     h1.classList.remove("hidee");
     l1.classList.remove("hidee");
   }
   else
   {
     h1.classList.add("hidee");
     l1.classList.add("hidee");
   }
   if(u>600 && u<700){
      h2.classList.add("activee");
      l2.classList.add("activee");
      
    }
    else
    {
      h2.classList.remove("activee");
      l2.classList.remove("activee");
    }
    if(u>1300 && u<1400){
      h3.classList.add("activee");
      l3.classList.add("activee");
      
    }
    else
    {
      h3.classList.remove("activee");
      l3.classList.remove("activee");
    }
    if(u>1900 && u<2000){
      h4.classList.add("activee");
      l4.classList.add("activee");
      
    }
    else
    {
      h4.classList.remove("hidee");
      l4.classList.remove("hidee");
    }
    if(u>2600 && u<2700){
      h5.classList.add("activee");
      l5.classList.add("activee");
      
    }
    else
    {
      h5.classList.remove("activee");
      l5.classList.remove("activee");
    }
    if(u>3200 && u<3300){
      h6.classList.add("activee");
      l6.classList.add("activee");
      
    }
    else
    {
      h6.classList.remove("activee");
      l6.classList.remove("activee");
    }
    if(u>3900 && u<4000){
      h7.classList.add("activee");
      l7.classList.add("activee");
      
    }
    else
    {
      h7.classList.remove("activee");
      l7.classList.remove("activee");
    }})

 
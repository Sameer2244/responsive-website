const btn=document.getElementsByClassName('dropdownbtn')[0];
const links=document.getElementsByClassName('nav-links')[0];
const container=document.getElementsByClassName('container')[0];
const brand=document.getElementsByClassName('brand-name')[0];

btn.addEventListener('click',()=>{
    links.classList.toggle('active');
    container.classList.toggle('smooth');
    brand.classList.toggle('anime');
})

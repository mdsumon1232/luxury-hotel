const bar = document.getElementById('bar');
const ul = document.getElementById('ul');
const xmark = document.getElementById('xmark');
bar.addEventListener('click',()=>{
    ul.style.opacity=100;
    bar.style.display='none';
    xmark.style.display='block'
})
xmark.addEventListener('click',()=>{
    ul.style.opacity=0;
    bar.style.display='block';
    xmark.style.display='none'
})
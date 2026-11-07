(function(){
var r=document.documentElement,s=null;
try{s=localStorage.getItem('theme')}catch(e){}
if(s)r.setAttribute('data-theme',s);
document.addEventListener('DOMContentLoaded',function(){
var t=document.getElementById('tog');
t&&t.addEventListener('click',function(){var n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}});
var b=document.getElementById('burger'),n=document.getElementById('menu');
b&&b.addEventListener('click',function(){n.classList.toggle('open')});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('.tr i').forEach(function(i){i.style.width=i.dataset.w+'%'});io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach(function(e){io.observe(e)});
var f=document.getElementById('cf');
f&&f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
location.href='mailto:imammahadi4758@gmail.com?subject='+encodeURIComponent(d.get('subject')||'Message from website')+'&body='+encodeURIComponent('Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\n\n'+d.get('message'))});
});
window.addEventListener('load',function(){setTimeout(function(){var l=document.getElementById('loader');l&&l.classList.add('hide')},500)});
})();

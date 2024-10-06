var post=document.querySelector('#post')
var heart=document.querySelector('#heart')
var heartclick=document.querySelector('#heartclick')
var heartclickold=document.querySelector('#heartclickold')
var item=document.querySelector('#item')
post.addEventListener("dblclick",function(){
    heart.style.display="block"
    heart.style.animation="bounce linear 2s"
    heartclick.style.display="block"
    heartclickold.style.display="none"
    setTimeout(function(){
        heart.style.display="none"
    },2000)
})
item.addEventListener("click",function(){
    heartclick.style.display="none"
    heartclickold.style.display="block"
})
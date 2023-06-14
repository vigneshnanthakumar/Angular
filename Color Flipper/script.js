let btn=document.getElementById("btn")
let col=document.getElementById("color")
let wrap=document.getElementById("wrap")
let hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


btn.addEventListener('click', function(){
    let hexColor = '#'
    for(let i=1;i<=6;i++){
        hexColor=hexColor+RHV()
    }
    wrap.style.backgroundColor=hexColor
    col.innerHTML=hexColor
})

function RHV(){
    let Index=Math.floor(Math.random()*16)
    return hex[Index]
}
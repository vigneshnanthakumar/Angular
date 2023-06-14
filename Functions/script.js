function fact(n){
    if(n==1)
    return 1
      return n*fact(n-1)
}
console.log(fact(6))


let volume=(l,b,h)=>{return l*b*h}
console.log(volume(7,8,9))

let area=r=> Math.PI*r*r
console.log(area(5))

let ram = "hi"
console.log(typeof(ram))
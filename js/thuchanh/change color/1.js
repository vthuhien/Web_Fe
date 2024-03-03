var container = document.querySelector('.container')
console.log(container);

for (let i = 0; i < 200; i++) {
    var square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseenter',function (e) {
        let color = randomColor()
        console.log(color);
        let element = e.currentTarget
        element.style.background = color
        element.style.boxShadow = ` 0 0 10px ${color} , 0 0 100px ${color} `
    })
    square.addEventListener('mouseleave',function (e) {
        e.currentTarget.style.background = '#1d1d1d'
        e.currentTarget.style.boxShadow = ' 0 0 10px #1d1d1d ,0 0 100px #1d1d1d'
    })
}
function randomColor(){
    var changeColor = '0123456789ABCDEF'
    var Color ='#'
    for (let i = 0; i < 6; i++) {
        Color +=changeColor[Math.floor(Math.random()*changeColor.length)]
        
    }
    return Color
}
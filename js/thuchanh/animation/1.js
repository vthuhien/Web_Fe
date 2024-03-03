var h1 = document.querySelector('#home h1')

//onscroll - cứ xoay con trỏ chuột thì in ra chứ test
window.onscroll = function () {
    var recH1 = h1.getClientRects()
    console.log(recH1)
}


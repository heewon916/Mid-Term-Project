var index1 = 0;   //이미지에 접근하는 인덱스
var index2 = 0;   //이미지에 접근하는 인덱스
var index3 = 0;   //이미지에 접근하는 인덱스
window.onload = function () {
    slideShow1();
    slideShow2();
    slideShow3();
}

function slideShow3 () {
    var i;
    var x = document.getElementsByClassName("slide3");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index3++;
    if (index3 > x.length) {
        index3 = 1;  //인덱스가 초과되면 1로 변경
    }
    x[index3 - 1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow3, 4000);   //함수를 4초마다 호출    
}
function slideShow2 () {
    var i;
    var x = document.getElementsByClassName("slide2");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index2++;
    if (index2 > x.length) {
        index2 = 1;  //인덱스가 초과되면 1로 변경
    }
    x[index2 - 1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow2, 4000);   //함수를 4초마다 호출    
}
function slideShow1 () {
    var i;
    var x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index1++;
    if (index1 > x.length) {
        index1 = 1;  //인덱스가 초과되면 1로 변경
    }
    x[index1 - 1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow1, 4000);   //함수를 4초마다 호출    
}
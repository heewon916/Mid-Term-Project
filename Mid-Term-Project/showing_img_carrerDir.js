var index_ai = 0;   //이미지에 접근하는 인덱스
var index_teach = 0;   //이미지에 접근하는 인덱스

window.onload = function () {
    slideShow_ai();
    slideShow_teach();
}

function slideShow_ai () {
    var i;
    var x = document.getElementsByClassName("ai");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index_ai++;
    if (index_ai > x.length) {
        index_ai = 1;  //인덱스가 초과되면 1로 변경
    }
    x[index_ai - 1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow_ai, 4000);   //함수를 4초마다 호출    
}
function slideShow_teach () {
    var i;
    var x = document.getElementsByClassName("teach");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index_teach++;
    if (index_teach > x.length) {
        index_teach = 1;  //인덱스가 초과되면 1로 변경
    }
    x[index_teach - 1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow_teach, 4000);   //함수를 4초마다 호출    
}
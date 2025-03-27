// main.js for kosmo154study index.html

// header-nav hover

const navLi = document.querySelectorAll(".header-gnb li");
const nav2 = document.querySelector('.nav2');
let isOn = false;

    navLi.forEach((li) => {
        li.addEventListener('mouseover', function(){
            nav2.classList.add('on');
        });
        li.addEventListener('mouseleave',function(){
            // 마우스가 nav2 안에 있으면 유지
            // 그렇지 않으면 닫기
            isOn ? " " : nav2.classList.remove('on');
        });
    });
    
    nav2.addEventListener('mouseenter', function(){
        isOn = true;
    })
    nav2.addEventListener('mouseout', function(){
        isOn = false;
    })
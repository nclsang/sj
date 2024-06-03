//jsp.js


//page1를 클릭했을 때 실행되는 함수//
function page1Click() {
    const intro =
        document.getElementById('page1');
    intro.style.display = 'block';
    const one =
        document.getElementById('page2');
    one.style.display = 'none';
    const two =
        document.getElementById('page3');
    two.style.display = 'none';
    const three =
        document.getElementById('page4');
    three.style.display = 'none';
    // Header의 배경색을 검정색으로 설정
    const header = document.getElementById('header');
    header.style.backgroundColor = 'black';
    // SJ Jeon 글자색를 white로 설정
    const button = document.getElementById('button');
    button.style.color = 'white';
    // 각 메뉴 항목의 텍스트 색상을 white로 설정
    const menuItems = document.querySelectorAll('.firstnavbar-links ul li a');
    menuItems.forEach(item => {
        item.style.color = 'white';
    });
    // 햄버거 바의 색상을 white로 설정
    const hamburgerBars = document.querySelectorAll('.toggle-button .bar');
    hamburgerBars.forEach(bar => {
        bar.style.backgroundColor = 'white';
    });
}

//page2를 클릭했을 때 실행되는 함수//
function page2Click() {
    const intro =
        document.getElementById('page1');
    intro.style.display = 'none';
    const one =
        document.getElementById('page2');
    one.style.display = 'block';
    const two =
        document.getElementById('page3');
    two.style.display = 'none';
    const three =
        document.getElementById('page4');
    three.style.display = 'none';
    // Header의 배경색 투명도를 0으로 설정
    const header = document.getElementById('header');
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    // SJ Jeon 글자색를 gold로 설정
    const button = document.getElementById('button');
    button.style.color = 'gold';
    // 각 메뉴 항목의 텍스트 색상을 gold로 설정
    const menuItems = document.querySelectorAll('.firstnavbar-links ul li a');
    menuItems.forEach(item => {
        item.style.color = 'gold';
    });
    // 햄버거 바의 색상을 gold로 설정
    const hamburgerBars = document.querySelectorAll('.toggle-button .bar');
    hamburgerBars.forEach(bar => {
        bar.style.backgroundColor = 'gold';
    });
}

//page3를 클릭했을 때 실행되는 함수//
function page3Click() {
    const intro =
        document.getElementById('page1');
    intro.style.display = 'none';
    const one =
        document.getElementById('page2');
    one.style.display = 'none';
    const two =
        document.getElementById('page3');
    two.style.display = 'block';
    const three =
        document.getElementById('page4');
    three.style.display = 'none';
    // Header의 배경색을 검정색으로 설정
    const header = document.getElementById('header');
    header.style.backgroundColor = 'black';
    // SJ Jeon 글자색를 white로 설정
    const button = document.getElementById('button');
    button.style.color = 'white';
    // 각 메뉴 항목의 텍스트 색상을 white로 설정
    const menuItems = document.querySelectorAll('.firstnavbar-links ul li a');
    menuItems.forEach(item => {
        item.style.color = 'white';
    });
    // 햄버거 바의 색상을 white로 설정
    const hamburgerBars = document.querySelectorAll('.toggle-button .bar');
    hamburgerBars.forEach(bar => {
        bar.style.backgroundColor = 'white';
    });
}

//page4를 클릭했을 때 실행되는 함수//
function page4Click() {
    const intro =
        document.getElementById('page1');
    intro.style.display = 'none';
    const one =
        document.getElementById('page2');
    one.style.display = 'none';
    const two =
        document.getElementById('page3');
    two.style.display = 'none';
    const three =
        document.getElementById('page4');
    three.style.display = 'block';
    // Header의 배경색을 검정색으로 설정
    const header = document.getElementById('header');
    header.style.backgroundColor = 'black';
    // SJ Jeon 글자색를 white로 설정
    const button = document.getElementById('button');
    button.style.color = 'white';
    // 각 메뉴 항목의 텍스트 색상을 white로 설정
    const menuItems = document.querySelectorAll('.firstnavbar-links ul li a');
    menuItems.forEach(item => {
        item.style.color = 'white';
    });
    // 햄버거 바의 색상을 white로 설정
    const hamburgerBars = document.querySelectorAll('.toggle-button .bar');
    hamburgerBars.forEach(bar => {
        bar.style.backgroundColor = 'white';
    });
}

//페이지가 로드될 때 기본적으로 page1을 클릭하게 함//
window.onload = page1Click;



document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.firstnavbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});



// lang dropdown

const dropdown = document.querySelector('.dropdown');
const selectedText = document.querySelector('.selected-text');
const selectedImg = document.querySelector('.selected-img');
const langItem = document.querySelectorAll('.lang-item');
const dropdownWraper = document.querySelector('.dropdown-wraper');



dropdown.addEventListener('click', () => {
    dropdownWraper.classList.toggle('show-list');
});

langItem.forEach((list) => {
    list.addEventListener('click', () => {
        selectedImg.src = list.querySelector('img').src;
        selectedText.innerHTML = list.querySelector('.lang-text').innerHTML;
    });
});

// mobile panel

const mobileWraper = document.querySelector('#mobile-wraper');
const mobileOpenBtn = document.querySelector('#mobile-open');
const mobileCloseBtn = document.querySelector('#mobile-close');
const mobilePanel = document.querySelector('#mobile-panel');


mobileOpenBtn.addEventListener('click', () => {
    mobileWraper.classList.add('mobile-wraper-active');
    mobilePanel.classList.add('active');

});

mobileCloseBtn.addEventListener('click', () => {
    mobileWraper.classList.remove('mobile-wraper-active');
    mobilePanel.classList.remove('active');

});

mobileWraper.addEventListener('click', () => {
    mobileWraper.classList.remove('mobile-wraper-active');
    mobilePanel.classList.remove('active');
});
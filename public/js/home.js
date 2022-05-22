const productContainers =  [...document.querySelectorAll('.product-container')];
const nxtButton = [...document.querySelectorAll('.nxt-button')];
const preButton = [...document.querySelectorAll('.pre-button')];

productContainers.forEach((item, i) => {
    let containerDimentions =item.getBoundingClientRect();
    let containerWidth = containerDimentions.width;

    nxtButton[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preButton[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
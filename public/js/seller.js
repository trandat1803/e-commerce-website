let loader = document.querySelector('.loader');
let user = JSON.parse(sessionStorage.user || null);

const becomeSellerElement = document.querySelector('.become-seller');
const productListingElement = document.querySelector('.product-listing');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-button');

window.onload = () => {
    if(user){
        if(compareToken(user.authToken, user.email)){
            if(!user.seller){
                becomeSellerElement.classList.remove('hide');
            } else {
                loader.style.display = 'block';
                setupProducts();
            }
        } else {
            location.replace('/login');
        } 
    } else {
        location.replace('/login');
    }
}

showApplyFormBtn.addEventListener('click', () => {
    becomeSellerElement.classList.add('hide');
    applyForm.classList.remove('hide');
})

// form Submission

const applyFormButton = document.querySelector('#apply-form-btn');
const bussinessName = document.querySelector('#bussiness-name');
const address = document.querySelector('#bussiness-add');
const about = document.querySelector('about');
const number = document.querySelector('#numer');
const tac = document.querySelector('#term-and-cond');
const legitInfo = document.querySelector('#legitInfo');

applyFormButton.addEventListener('click', () => {
    if(!bussinessName.value.length || !address.value.length || !about.value.length || !number.value.length){
        showAlert('Fill all the inputs');
    } else if(!tac.checked || !legitInfo.checked){
        showAlert('you must agree to our terms and condition');
    } else {
        //maiking server request
        loader.style.display = 'block';
        sendData('/seller', {
            name: bussinessName.value, 
            address: address.value,
            about: about.value,
            number: number.value,
            tac: tac.checked,
            legit: legitInfo.checked,
            email: JSON.parse(sessionStorage.user).email
        })
    }
})

const setupProducts = () => {
    fetch('/get-products',{
        method: 'post',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({email: user.email})
    })
    .then(res => res.json())
    .then(data =>{
        loader.style.display = null;
        productListingElement.classList.remove('hide');
        if(data == 'no products'){
            let emptySvg = document.querySelector('.no-product-image');
            emptySvg.classList.remove('hide');
        }else{
            data.forEach(product => createProduct(product));
        }
    });
}

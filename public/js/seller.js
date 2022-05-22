let loader = document.querySelector('.loader');

const becomeSellerElement = document.querySelector('.become-seller');
const productListeningElement = document.querySelector('.product-listening');
const applyForm = document.querySelector('.apply-form');
const showApplyFormBtn = document.querySelector('#apply-button');

window.onload = () => {
    if(sessionStorage.user){
        let user = JSON.parse(sessionStorage.user);
        if(compareToken(user.authToken, user.email)){
            if(!user.seller){
                becomeSellerElement.classList.remove('hide');
            } else {
                productListeningElement.classList.remove('hide');
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

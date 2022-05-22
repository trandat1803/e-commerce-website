const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML =`
    <div class="footer-content">
        <img src="img/homeicon.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Mens</li>
                <li><a href="#" class="footer-link">Running</a></li>
                <li><a href="#" class="footer-link">Tennis</a></li>
                <li><a href="#" class="footer-link">Basketball</a></li>
                <li><a href="#" class="footer-link">Street-style</a></li>
                <li><a href="#" class="footer-link">Dance</a></li>
                <li><a href="#" class="footer-link">carsual</a></li>
                <li><a href="#" class="footer-link">formal</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">Womens</li>
                <li><a href="#" class="footer-link">Running</a></li>
                <li><a href="#" class="footer-link">Tennis</a></li>
                <li><a href="#" class="footer-link">Basketball</a></li>
                <li><a href="#" class="footer-link">Street-style</a></li>
                <li><a href="#" class="footer-link">Dance</a></li>
                <li><a href="#" class="footer-link">carsual</a></li>
                <li><a href="#" class="footer-link">formal</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">About store</p>
        <p class="info">Our store was established on 3/5/2022, 
        at the same time as the footwear industry and fashion is flourishing. 
        We guarantee to provide you with quality shoes imported from reputable 
        shoe sources around the world. From big brands like Nike, Adidas, Converses,...</p>
        <p class="info">support email: trandoanquocdat@gmail.com</p>
        <p class="info">contact numbers: 0343626555 - 02923892486</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Term & Services</a>                    
                <a href="#" class="social-link">Privacy page</a>                    
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">Sneakers, protect your feet</p>
    `;
}

createFooter();
// Динамічне завантаження jQuery та Slick Carousel
function loadScript(url, callback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onload = callback;
    document.head.appendChild(script);
}

loadScript('https://code.jquery.com/jquery-3.6.0.min.js', function() {
    loadScript('https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function() {
        $(document).ready(function(){
            $('.slider').slick({
                autoplay: true,
                autoplaySpeed: 2000,
            });

            // Отримання курсу валют
            fetch('https://api.exchangerate-api.com/v4/latest/UAH')
                .then(response => response.json())
                .then(data => {
                    const rates = data.rates;
                    const exchangeRatesDiv = document.getElementById('exchange-rates');
                    exchangeRatesDiv.innerHTML = `
                        <p><i class="fas fa-dollar-sign"></i> 1 UAH = ${rates.USD} USD</p>
                        <p><i class="fas fa-euro-sign"></i> 1 UAH = ${rates.EUR} EUR</p>
                        <p><i class="fas fa-pound-sign"></i> 1 UAH = ${rates.GBP} GBP</p>
                    `;
                })
                .catch(error => {
                    console.error('Error fetching exchange rates:', error);
                    document.getElementById('exchange-rates').innerHTML = '<p>Не вдалося завантажити дані.</p>';
                });

            // Анімація JS
            const jsAnimatedImage = document.getElementById('js-animated-image');
            jsAnimatedImage.addEventListener('mouseover', () => {
                jsAnimatedImage.style.transform = 'scale(1.2)';
            });
            jsAnimatedImage.addEventListener('mouseout', () => {
                jsAnimatedImage.style.transform = 'scale(1)';
            });
        });
    });
});

// Навігаційні посилання
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#ff6347';  // Зміна кольору при наведенні
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '';  // Повернення кольору після наведення
    });
});
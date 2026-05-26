document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('nameForm');
    const nameInput = document.getElementById('customerName');
    let isAnimating = false;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = nameInput.value.trim();
        if (!name) return;

        if (isAnimating) return;
        isAnimating = true;

        // Hide form and show loader
        document.querySelector('.content-card').classList.add('fade-out');
        setTimeout(() => {
            showCard(name);
        }, 400);
    });

    function showCard(name) {
        const cardHTML = `
            <div class="greeting-card animate-in">
                <div class="moon-circle">
                    <div class="inner-moon"></div>
                    <div class="stars-bg"></div>
                </div>
                
                <div class="card-header">
                    <img src="https://i.imgur.com/5wF8X9l.png" alt="Castello Logo" class="card-logo">
                    <h2>عيد أضحى مبارك</h2>
                </div>

                <div class="card-body">
                    <p class="greeting-text">
                        <span>أهلا بي ${name}!</span>
                        <br>
                        نهنئك ونهنىء أهل بيتك بمناسبة عيد الأضحى المبارك.
                        <br>
                        نتمنى لك عيد سعيد مليء بالسعادة واليمن والبركات.
                    </p>
                </div>

                <div class="card-footer">
                    <p class="tagline">شركاء النجاح في دهنات كاستيللو</p>
                    
                    <div class="action-buttons">
                        <a href="#" id="shareWhatsapp" target="_blank" class="btn-social whatsapp">
                            <i class="fa-brands fa-whatsapp"></i> واتساب
                        </a>
                        <button id="captureBtn" class="btn-social capture">
                            <i class="fa-solid fa-camera"></i> صورة للـ Story
                        </button>
                    </div>
                </div>
            </div>
        `;

        const container = document.querySelector('.container');
        container.innerHTML = cardHTML;

        // Setup share link
        setupWhatsAppShare(name);

        // Add listener for capture button
        document.getElementById('captureBtn').addEventListener('click', handleCapture);
    }

    function setupWhatsAppShare(name) {
        const url = window.location.href; // Current URL
        const text = `عيد أضحى مبارك يا ${name}! %0a%d8%a3%d9%87%d9%84%d8%a7%d8%a8%d8%a7%d9%8b%d9%83%20%d9%85%d9%86%20%d8%af%d9%87%d9%86%d8%a7%d8%aa%20%d9%83%d8%a7%d8%b3%d8%aa%d9%8a%d9%84%d9%88 %0a%d9%86%d8%aa%d8%b9%d8%af%d8%af%20%d9%84%d9%83%d9%85%20%d8%a8%d9%85%d9%88%d8%af%20%d8%a7%d9%84%d8%a1%d8%ae%d9%8a%d8%af%20%d8%a7%d9%84%d8%a3%d8%b6%d8%AD%d9%89%d8%a1.`;
        document.getElementById('shareWhatsapp').href = `https://wa.me/?text=${text} ${url}`;
    }

    // Mock function for capture button (since we can't embed html2canvas without external script dependencies)
    function handleCapture() {
        alert("عشان تحط الصورة في الستوري، خد Screenshot للجهاز أو استخدم زر واتساب عشان تحفظها.");
    }
});

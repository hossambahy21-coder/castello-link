document.addEventListener('DOMContentLoaded', () => {
    const nameForm = document.getElementById('nameForm');
    const customerNameInput = document.getElementById('customerName');
    const welcomeSection = document.getElementById('welcomeSection');
    const greetingSection = document.getElementById('greetingSection');
    
    const highlightNameSpan = document.querySelector('.highlight-name');
    const shareWhatsappBtn = document.getElementById('shareWhatsapp');
    const captureBtn = document.getElementById('captureBtn');
    // Generate Stars
    function createStars() {
        const container = document.querySelector('.stars-container');
        const starCount = 50;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            
            const x = Math.random()  100;
            const y = Math.random()  100;
            const size = Math.random()  3 + 1;
            const delay = Math.random()  5;
            const duration = Math.random()  3 + 2;
            
            star.style.left = `${x}%`;
            star.style.top = `${y}%`;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;
            star.style.animationDelay = `${delay}s`;
            star.style.animationDuration = `${duration}s`;
            
            container.appendChild(star);
        }
    }

    // Form Submit
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = customerNameInput.value.trim();
        
        if (name) {
            // Update Text
            highlightNameSpan.textContent = name;
            
            // Update WhatsApp Link
            const whatsappText = `عيد أضحى مبارك يا ${name}! %0a%d8%a3%d9%87%d9%84%d8%a7%d8%a8%d8%a7%d9%8b%d9%83%20%d9%85%d9%86%20%d8%af%d9%87%d9%86%d8%a7%d8%aa%20%d9%83%d8%a7%d8%b3%d8%aa%d9%8a%d9%84%d9%88 %0a%d9%86%d8%aa%d8%b9%d8%af%d8%af%20%d9%84%d9%83%d9%85%20%d8%a8%d9%85%d9%88%d8%af%20%d8%a7%d9%84%d8%a1%d8%ae%d9%8a%d8%af%20%d8%a7%d9%84%d8%a3%d8%b6%d8%ad%d9%89%d8%a1.`;
            const url = window.location.href;
            shareWhatsappBtn.href = `https://wa.me/?text=${whatsappText} ${url}`;
            
            // Transition Logic
            welcomeSection.classList.remove('active');
            welcomeSection.classList.add('fade-out');
            
            setTimeout(() => {
                welcomeSection.style.display = 'none';
                greetingSection.classList.remove('fade-out');
                greetingSection.classList.add('active');
            }, 500);
        }
    });

    // Screenshot Button (Mock functionality for web)
    captureBtn.addEventListener('click', () => {
        alert("عشان تحفظ الصورة، خد Screenshot للجهاز، أو استخدم زر واتساب عشان تحلها!");
    });

    // Initialize
    createStars();
});

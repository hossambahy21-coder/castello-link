document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Intro Logo Loader ---
    const loader = document.getElementById('logoLoader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2500); // Display for 2.5 seconds then fade out
    // --- 2. Personalized Name Logic ---
    const modal = document.getElementById('greetingModal');
    const nameForm = document.getElementById('nameForm');
    const customerNameInput = document.getElementById('customerName');
    const personalizedGreeting = document.getElementById('personalizedGreeting');
    const displayUserName = document.getElementById('displayUserName');
    
    // Check if user already entered name
    const savedName = localStorage.getItem('castillocustomername');
    
    if (savedName) {
        // If name exists, update UI
        displayUserName.textContent = savedName;
        personalizedGreeting.classList.remove('hidden');
        
        // Typewriter effect for name in the text
        const h1Element = document.querySelector('h1');
        h1Element.innerHTML = `كل عام وأنتِ ` 
            + `<span class="text-transparent bg-clip-text bg-gradient-to-r from-castillo-primary to-purple-500" id="dynamicName">${savedName}</span>`
            + `<br> أعيادكم طيبة`;

        const dynamicName = document.getElementById('dynamicName');
        dynamicName.innerHTML = '';
        let i = 0;
        const typeWriter = () => {
            if (i < savedName.length) {
                dynamicName.innerHTML += savedName.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                dynamicName.classList.add('typewriter-cursor');
            }
        };
        typeWriter();
    } else {
        // Show modal after a short delay
        setTimeout(() => {
            modal.classList.remove('hidden');
        }, 1000);
    }

    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = customerNameInput.value.trim();
        if (name) {
            // Save to local storage
            localStorage.setItem('castillocustomername', name);
            
            // Update UI
            displayUserName.textContent = name;
            personalizedGreeting.classList.remove('hidden');
            
            // Update H1 with name animation
            const h1Element = document.querySelector('h1');
            const spanId = 'dynamicName';
            
            h1Element.innerHTML = `كل عام وأنتِ ` 
                + `<span class="text-transparent bg-clip-text bg-gradient-to-r from-castillo-primary to-purple-500" id="${spanId}">&nbsp;</span>`
                + `<br> أعيادكم طيبة`;
            
            const dynamicName = document.getElementById(spanId);
            
            // Typewriter effect logic
            dynamicName.innerHTML = '';
            let i = 0;
            const typeWriter = () => {
                if (i < name.length) {
                    dynamicName.innerHTML += name.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    dynamicName.classList.add('typewriter-cursor');
                }
            };
            typeWriter();

            // Hide Modal
            modal.classList.add('hidden');
        }
    });

    // --- 3. Particle System for Eid Theme ---
    const container = document.getElementById('particles-container');
    const symbols = ['🐄', '🎁', '🌙', '⭐', '🕌', '🧁']; // Added cake for Eid
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const symbol = symbols[Math.floor(Math.random()  symbols.length)];
        particle.textContent = symbol;
        
        const size = Math.random()  20 + 10; 
        particle.style.fontSize = `${size}px`;
        
        const x = Math.random()  100;
        const y = 100 + Math.random()  100;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        
        const duration = Math.random()  10 + 10; 
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${Math.random()  5}s`;
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, duration  1000);
    }
    
    for(let i = 0; i < 30; i++) {
        createParticle();
    }
    
    setInterval(createParticle, 800);

    // --- 4. 3D Card Tilt Effect ---
    const cards = document.querySelectorAll('.card-3d');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.left; 
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY)  -10; 
            const rotateY = ((x - centerX) / centerX)  10;
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `rotateX(0deg) rotateY(0deg)`;
        });
    });
    
    console.log('✅ Castillo Eid Design Loaded - Mabrouk!');
});


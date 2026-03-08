// =====================================================
// המטבח של חנוש - Main Application
// =====================================================

// Menu Items Data
const menuItems = [
    {
        id: 1,
        name: "גפילטע פיש",
        description: "גפילטע פיש ביתי אמיתי, מוכן לפי המתכון המסורתי של סבתא. עדין, טעים ומושלם לכל ארוחה.",
        price: 55,
        category: "main",
        categoryLabel: "מנה עיקרית",
        emoji: "🐟",
        gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        badge: "הכי נמכר",
        unit: "מנה"
    },
    {
        id: 2,
        name: "קרעפלך",
        description: "כיסוני בצק ממולאים בבשר טחון מתובל, מבושלים לשלמות. טעם של בית אמיתי בכל ביס.",
        price: 45,
        category: "main",
        categoryLabel: "מנה עיקרית",
        emoji: "🥟",
        gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        badge: "",
        unit: "מנה"
    },
    {
        id: 3,
        name: "קניידלעך",
        description: "כדורי מצה אוויריים ומושלמים, בדיוק כמו שסבתא הכינה. מתאימים למרק או כתוספת.",
        price: 40,
        category: "soup",
        categoryLabel: "מרק / תוספת",
        emoji: "🍲",
        gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        badge: "קלאסי",
        unit: "מנה (6 יח')"
    },
    {
        id: 4,
        name: "עוף ממולא",
        description: "עוף שלם ממולא באורז, בשר ותבלינים מיוחדים. צלוי לשלמות עם קרום זהוב ופריך.",
        price: 120,
        category: "main",
        categoryLabel: "מנה עיקרית",
        emoji: "🍗",
        gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        badge: "פרימיום",
        unit: "יחידה"
    },
    {
        id: 5,
        name: "מוסקה",
        description: "שכבות של חצילים, בשר טחון ובשמל קרמי. אפויה בתנור עד להזהבה מושלמת.",
        price: 65,
        category: "main",
        categoryLabel: "מנה עיקרית",
        emoji: "🍆",
        gradient: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        badge: "",
        unit: "מנה"
    },
    {
        id: 6,
        name: "כבד קצוץ",
        description: "כבד עוף קצוץ עם ביצים קשות ובצל מטוגן. מתכון מסורתי שעובר מדור לדור.",
        price: 50,
        category: "side",
        categoryLabel: "תוספת / מתאבן",
        emoji: "🫕",
        gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        badge: "מסורתי",
        unit: "מנה"
    },
    {
        id: 7,
        name: "סלט ביצים",
        description: "סלט ביצים קלאסי עם מיונז, חרדל ותיבול מושלם. פשוט, טעים ותמיד פוגע בול.",
        price: 35,
        category: "salad",
        categoryLabel: "סלט",
        emoji: "🥗",
        gradient: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
        badge: "",
        unit: "מנה"
    },
    {
        id: 8,
        name: "צימעס",
        description: "צימעס מתוק ומפנק עם גזר, שזיפים ודבש. תוספת מושלמת לכל ארוחה חגיגית.",
        price: 40,
        category: "side",
        categoryLabel: "תוספת",
        emoji: "🥕",
        gradient: "linear-gradient(135deg, #fdcb6e 0%, #e17055 100%)",
        badge: "מומלץ",
        unit: "מנה"
    },
    {
        id: 9,
        name: "קומפוט",
        description: "קומפוט פירות ביתי מתוק ומפנק, מבושל לאט עם פירות העונה, קינמון ורמז של לימון. קינוח מושלם.",
        price: 30,
        category: "dessert",
        categoryLabel: "קינוח",
        emoji: "🍑",
        gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)",
        badge: "חדש!",
        unit: "מנה"
    },
    {
        id: 10,
        name: "מרק עוף",
        description: "מרק עוף ביתי זהוב ושקוף, מבושל לאט עם ירקות טריים, שמיר ושקדי מרק. מחמם את הנשמה.",
        price: 35,
        category: "soup",
        categoryLabel: "מרק",
        emoji: "🍜",
        gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        badge: "חם וטעים",
        unit: "מנה"
    },
    {
        id: 11,
        name: "עוגת תפוזים אוורירית",
        description: "עוגת תפוזים קלילה ואוורירית עם מיץ תפוזים סחוט טרי וקליפת תפוז מגוררת. נמסה בפה!",
        price: 45,
        category: "dessert",
        categoryLabel: "קינוח",
        emoji: "🍊",
        gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
        badge: "הכי אהוב",
        unit: "יחידה"
    },
    {
        id: 12,
        name: "טירמיסו",
        description: "טירמיסו איטלקי קלאסי עם שכבות של קרם מסקרפונה, ביסקוויטים ספוגים בקפה ואבקת קקאו. פינוק אמיתי!",
        price: 40,
        category: "dessert",
        categoryLabel: "קינוח",
        emoji: "🍰",
        gradient: "linear-gradient(135deg, #3e2723 0%, #8d6e63 100%)",
        badge: "פינוק",
        unit: "מנה"
    },
    {
        id: 13,
        name: "חמין",
        description: "חמין ביתי אמיתי עם בשר, תפוחי אדמה, שעועית, ביצים וקוגל. מבושל לאט כל הלילה כמו של סבתא.",
        price: 80,
        category: "main",
        categoryLabel: "מנה עיקרית",
        emoji: "🍲",
        gradient: "linear-gradient(135deg, #5d4037 0%, #a1887f 100%)",
        badge: "קלאסי",
        unit: "מנה"
    }
];

// Cart State
let cart = [];

// =====================================================
// Initialize App
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    renderMenu(menuItems);
    initScrollEffects();
    initParticles();
    initNavActiveState();
});

// =====================================================
// Render Menu
// =====================================================
function renderMenu(items) {
    const grid = document.getElementById('menuGrid');
    grid.innerHTML = '';

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.setAttribute('data-category', item.category);
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="menu-card-image">
                <div class="food-gradient" style="background: ${item.gradient};"></div>
                ${item.badge ? `<span class="menu-card-badge">${item.badge}</span>` : ''}
                <span class="food-emoji">${item.emoji}</span>
            </div>
            <div class="menu-card-content">
                <div class="menu-card-category">${item.categoryLabel}</div>
                <h3 class="menu-card-title">${item.name}</h3>
                <p class="menu-card-desc">${item.description}</p>
                <div class="menu-card-footer">
                    <div class="menu-card-price">
                        &#8362;${item.price}
                        <small>/ ${item.unit}</small>
                    </div>
                    <button class="btn-add" onclick="addToCart(${item.id})">
                        <span>&#43;</span> הוסף לסל
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// =====================================================
// Filter Menu
// =====================================================
function filterMenu(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    let filtered = category === 'all' ? menuItems : menuItems.filter(item => item.category === category);
    renderMenu(filtered);
}

// =====================================================
// Cart Functions
// =====================================================
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    if (!item) return;

    const existing = cart.find(c => c.id === itemId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    showToast(`${item.name} נוסף לסל!`);

    // Bump animation on cart count
    const countEl = document.getElementById('cartCount');
    countEl.classList.remove('bump');
    void countEl.offsetWidth;
    countEl.classList.add('bump');
}

function removeFromCart(itemId) {
    cart = cart.filter(c => c.id !== itemId);
    updateCartUI();
}

function updateQty(itemId, delta) {
    const item = cart.find(c => c.id === itemId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(itemId);
        return;
    }

    updateCartUI();
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartFooter = document.getElementById('cartFooter');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');

    cartCount.textContent = getCartCount();

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <span class="cart-empty-icon">&#128722;</span>
                <p>הסל ריק</p>
                <span>הוסיפו מנות טעימות מהתפריט!</span>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';
    cartTotal.textContent = `₪${getCartTotal()}`;

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-emoji" style="background: ${item.gradient};">
                ${item.emoji}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₪${item.price * item.qty}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span class="cart-item-qty">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="הסר">&#128465;</button>
        </div>
    `).join('');
}

// =====================================================
// Cart Toggle
// =====================================================
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

// =====================================================
// Checkout
// =====================================================
function openCheckout() {
    if (cart.length === 0) return;
    toggleCart();
    const modal = document.getElementById('checkoutModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    goToStep(1);
}

function closeCheckout() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function goToStep(step) {
    // Validate step 2 before going to step 3
    if (step === 3) {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;

        if (!firstName || !lastName || !phone) {
            showToast('אנא מלאו את כל השדות הנדרשים');
            return;
        }

        if (deliveryType === 'delivery') {
            const street = document.getElementById('street').value.trim();
            const city = document.getElementById('city').value.trim();
            if (!street || !city) {
                showToast('אנא מלאו כתובת למשלוח');
                return;
            }
        }

        // Generate order and show confirmation
        submitOrder();
        return;
    }

    // Hide all steps
    document.getElementById('checkoutStep1').style.display = 'none';
    document.getElementById('checkoutStep2').style.display = 'none';
    document.getElementById('checkoutStep3').style.display = 'none';

    // Show requested step
    document.getElementById(`checkoutStep${step}`).style.display = 'block';

    // Update step indicators
    for (let i = 1; i <= 3; i++) {
        const indicator = document.getElementById(`step${i}Indicator`);
        indicator.classList.remove('active', 'completed');
        if (i === step) indicator.classList.add('active');
        if (i < step) indicator.classList.add('completed');
    }

    // Populate order summary on step 1
    if (step === 1) {
        const summary = document.getElementById('orderSummary');
        summary.innerHTML = cart.map(item => `
            <div class="order-summary-item">
                <div class="order-summary-item-info">
                    <span class="order-summary-item-emoji">${item.emoji}</span>
                    <div>
                        <div class="order-summary-item-name">${item.name}</div>
                        <div class="order-summary-item-qty">כמות: ${item.qty}</div>
                    </div>
                </div>
                <div class="order-summary-item-price">₪${item.price * item.qty}</div>
            </div>
        `).join('');

        updateDeliveryFee();
    }

    // Handle delivery/pickup sections on step 2
    if (step === 2) {
        updateDeliveryAddressVisibility();
    }
}

function updateDeliveryFee() {
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const fee = deliveryType === 'delivery' ? 25 : 0;
    const subtotal = getCartTotal();

    document.getElementById('orderSubtotal').textContent = `₪${subtotal}`;
    document.getElementById('deliveryFee').textContent = fee > 0 ? `₪${fee}` : 'חינם!';
    document.getElementById('deliveryFeeRow').style.display = fee > 0 ? 'flex' : 'none';
    document.getElementById('orderTotalFinal').textContent = `₪${subtotal + fee}`;

    updateDeliveryAddressVisibility();
}

function updateDeliveryAddressVisibility() {
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const deliverySection = document.getElementById('deliveryAddressSection');
    const pickupSection = document.getElementById('pickupSection');

    if (deliveryType === 'delivery') {
        if (deliverySection) deliverySection.style.display = 'block';
        if (pickupSection) pickupSection.style.display = 'none';
    } else {
        if (deliverySection) deliverySection.style.display = 'none';
        if (pickupSection) pickupSection.style.display = 'block';
    }
}

function submitOrder() {
    const deliveryType = document.querySelector('input[name="deliveryType"]:checked').value;
    const fee = deliveryType === 'delivery' ? 25 : 0;
    const total = getCartTotal() + fee;

    const orderNum = `#${Math.floor(1000 + Math.random() * 9000)}`;
    document.getElementById('orderNumber').textContent = orderNum;

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('paymentMethod');
    const paymentText = paymentMethod.options[paymentMethod.selectedIndex].text;

    let details = `
        <p><strong>שם:</strong> ${firstName} ${lastName}</p>
        <p><strong>טלפון:</strong> ${phone}</p>
        <p><strong>תשלום:</strong> ${paymentText}</p>
    `;

    if (deliveryType === 'delivery') {
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const apartment = document.getElementById('apartment').value;
        details += `<p><strong>כתובת:</strong> ${street}, ${city}${apartment ? ', ' + apartment : ''}</p>`;
        details += `<p><strong>משלוח:</strong> ₪25</p>`;
    } else {
        const pickupTime = document.getElementById('pickupTime').value;
        details += `<p><strong>איסוף עצמי:</strong> רחוב הבישול 12, תל אביב</p>`;
        if (pickupTime) details += `<p><strong>שעת איסוף:</strong> ${pickupTime}</p>`;
    }

    details += `<p><strong>פריטים:</strong> ${cart.map(i => `${i.name} x${i.qty}`).join(', ')}</p>`;
    details += `<p style="font-size:1.1rem; font-weight:700; color: var(--primary);"><strong>סה"כ:</strong> ₪${total}</p>`;

    document.getElementById('confirmationDetails').innerHTML = details;

    // Show step 3
    document.getElementById('checkoutStep1').style.display = 'none';
    document.getElementById('checkoutStep2').style.display = 'none';
    document.getElementById('checkoutStep3').style.display = 'block';

    for (let i = 1; i <= 3; i++) {
        const indicator = document.getElementById(`step${i}Indicator`);
        indicator.classList.remove('active', 'completed');
        if (i === 3) indicator.classList.add('active');
        if (i < 3) indicator.classList.add('completed');
    }

    // Launch confetti
    launchConfetti();

    // Clear cart
    cart = [];
    updateCartUI();
}

// =====================================================
// Toast Notification
// =====================================================
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// =====================================================
// Scroll Effects
// =====================================================
function initScrollEffects() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.about-card, .contact-card, .testimonial-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// =====================================================
// Navigation Active State
// =====================================================
function initNavActiveState() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// =====================================================
// Mobile Menu
// =====================================================
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const btn = document.getElementById('mobileMenuBtn');
    navLinks.classList.toggle('active');
    btn.classList.toggle('active');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
        document.getElementById('mobileMenuBtn').classList.remove('active');
    });
});

// =====================================================
// Floating Particles
// =====================================================
function initParticles() {
    const container = document.getElementById('particles');
    const emojis = ['🍽️', '🥘', '🍲', '🥗', '🍗', '🥕', '🧅', '🌿', '⭐', '❤️', '🍴', '🥄'];

    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 20}s`;
        particle.style.animationDuration = `${15 + Math.random() * 15}s`;
        particle.style.fontSize = `${16 + Math.random() * 20}px`;
        container.appendChild(particle);
    }
}

// =====================================================
// Confetti Effect
// =====================================================
function launchConfetti() {
    const colors = ['#e8590c', '#f59e0b', '#059669', '#3b82f6', '#ec4899', '#8b5cf6'];
    const container = document.querySelector('.confirmation-content');

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.cssText = `
            position: absolute;
            width: ${5 + Math.random() * 8}px;
            height: ${5 + Math.random() * 8}px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            top: 50%;
            left: 50%;
            border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
            pointer-events: none;
            z-index: 10;
            animation: confettiAnim ${1 + Math.random() * 2}s ease-out forwards;
        `;

        const angle = Math.random() * Math.PI * 2;
        const velocity = 100 + Math.random() * 200;
        const x = Math.cos(angle) * velocity;
        const y = Math.sin(angle) * velocity;

        confetti.style.setProperty('--x', `${x}px`);
        confetti.style.setProperty('--y', `${y}px`);

        container.style.position = 'relative';
        container.appendChild(confetti);

        setTimeout(() => confetti.remove(), 3000);
    }

    // Add confetti animation dynamically
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes confettiAnim {
                0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
                100% { transform: translate(var(--x), var(--y)) rotate(720deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Close checkout modal on overlay click
document.getElementById('checkoutModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('checkoutModal')) {
        closeCheckout();
    }
});
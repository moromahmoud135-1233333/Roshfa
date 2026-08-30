// ========== Products Database ==========
const products = [
    { id: 1, name: 'عصير البرتقال', enName: 'Orange Juice', price: 25, category: 'citrus', emoji: '🍊', description: 'طازة 100%' },
    { id: 2, name: 'عصير الليمون', enName: 'Lemon Juice', price: 20, category: 'citrus', emoji: '🍋', description: 'منعش وطازة' },
    { id: 3, name: 'عصير المانجو', enName: 'Mango Juice', price: 30, category: 'tropical', emoji: '🥭', description: 'استوائي شهي' },
    { id: 4, name: 'عصير الأناناس', enName: 'Pineapple Juice', price: 28, category: 'tropical', emoji: '🍍', description: 'حلو وتروبيكالي' },
    { id: 5, name: 'عصير الفراولة', enName: 'Strawberry Juice', price: 32, category: 'berries', emoji: '🍓', description: 'حمضي وحلو' },
    { id: 6, name: 'عصير التوت', enName: 'Berry Mix', price: 35, category: 'berries', emoji: '🫐', description: 'مزيج التوت الطازة' },
    { id: 7, name: 'عصير أخضر', enName: 'Green Juice', price: 40, category: 'green', emoji: '💚', description: 'صحي وطبيعي' },
    { id: 8, name: 'عصير السبانخ والتفاح', enName: 'Spinach Apple', price: 38, category: 'green', emoji: '🥗', description: 'غني بالفيتامينات' },
];

let cart = [];
let currentLanguage = 'ar';

// ========== Initialize on Load ==========
window.addEventListener('DOMContentLoaded', () => {
    loadProducts('all');
    setupLanguageToggle();
    setupFormSubmit();
});

// ========== Load Products ==========
function loadProducts(category) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(p => p.category === category);

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="ar-text">${product.name}</h3>
                <h3 class="en-text">${product.enName}</h3>
                <p class="ar-text">${product.description}</p>
                <p class="en-text">${product.description}</p>
                <div class="product-price">${product.price} ريال</div>
                <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', '${product.enName}', ${product.price})">
                    <span class="ar-text">أضف للسلة</span>
                    <span class="en-text">Add to Cart</span>
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Update filter buttons
    updateFilterButtons(category);
}

// ========== Filter Products ==========
function filterProducts(category) {
    loadProducts(category);
}

// ========== Update Filter Buttons ==========
function updateFilterButtons(active) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// ========== Cart Functions ==========
function addToCart(id, name, enName, price) {
    cart.push({ id, name, enName, price });
    updateCartCount();
    showNotification(currentLanguage === 'ar' ? 'تم الإضافة!' : 'Added!');
}

function updateCartCount() {
    document.getElementById('cart-count').textContent = cart.length;
}

function openCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';
    displayCartItems();
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function displayCartItems() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="ar-text">السلة فارغة</p><p class="en-text">Cart is empty</p>`;
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <span class="ar-text">${item.name}</span>
                <span class="en-text">${item.enName}</span>
                <span>${item.price} ريال</span>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
        `;
        cartItems.appendChild(itemDiv);
    });

    document.getElementById('total-price').textContent = total;
    document.getElementById('total-price-en').textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    displayCartItems();
}

function orderViaWhatsApp() {
    if (cart.length === 0) {
        alert(currentLanguage === 'ar' ? 'أضف منتجات للسلة أولاً' : 'Add products to cart first');
        return;
    }

    let message = currentLanguage === 'ar' ? 'طلبي:\n' : 'My Order:\n';
    let total = 0;

    cart.forEach(item => {
        const itemName = currentLanguage === 'ar' ? item.name : item.enName;
        message += `• ${itemName} - ${item.price} ريال\n`;
        total += item.price;
    });

    message += `\nالمجموع: ${total} ريال`;

    const whatsappLink = `https://wa.me/201010448334?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

// ========== Language Toggle ==========
function setLanguage(lang) {
    currentLanguage = lang;
    const arTexts = document.querySelectorAll('.ar-text');
    const enTexts = document.querySelectorAll('.en-text');

    if (lang === 'ar') {
        arTexts.forEach(el => el.style.display = 'block');
        enTexts.forEach(el => el.style.display = 'none');
        document.documentElement.lang = 'ar';
        document.documentElement.dir = 'rtl';
    } else {
        arTexts.forEach(el => el.style.display = 'none');
        enTexts.forEach(el => el.style.display = 'block');
        document.documentElement.lang = 'en';
        document.documentElement.dir = 'ltr';
    }
}

function setupLanguageToggle() {
    setLanguage('ar');
}

// ========== Form Submit ==========
function setupFormSubmit() {
    const form = document.getElementById('order-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification(currentLanguage === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
            form.reset();
        });
    }
}

// ========== Notification ==========
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        font-size: 16px;
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
}

// ========== Close Cart Modal when clicked outside ==========
window.addEventListener('click', (e) => {
    const modal = document.getElementById('cart-modal');
    if (e.target === modal) {
        closeCart();
    }
});

// ========== Add CSS for animations ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    .cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background-color: #f5f5f5;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .cart-item-info {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .remove-btn {
        background-color: #e74c3c;
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }

    .remove-btn:hover {
        background-color: #c0392b;
    }

    .modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .modal-content {
        background-color: white;
        margin: 5% auto;
        padding: 30px;
        border-radius: 15px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .close {
        color: #aaa;
        float: left;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }

    .close:hover {
        color: #000;
    }

    .order-btn {
        background-color: #25d366;
        color: white;
        padding: 12px 30px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-weight: bold;
        width: 100%;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-size: 16px;
    }

    .order-btn:hover {
        background-color: #20ba5a;
    }

    .order-form {
        background-color: #f5f5f5;
        padding: 30px;
        border-radius: 15px;
        margin-top: 30px;
    }

    .order-form input,
    .order-form textarea {
        width: 100%;
        padding: 12px;
        margin-bottom: 15px;
        border: 2px solid #ddd;
        border-radius: 8px;
        font-family: inherit;
    }

    .order-form input:focus,
    .order-form textarea:focus {
        outline: none;
        border-color: #27ae60;
    }

    .submit-btn {
        background-color: #27ae60;
        color: white;
        padding: 12px 30px;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        font-weight: bold;
        width: 100%;
        font-size: 16px;
    }

    .submit-btn:hover {
        background-color: #229954;
    }

    .filter-btn {
        background-color: #f5f5f5;
        color: #333;
        padding: 10px 20px;
        border: 2px solid #ddd;
        border-radius: 25px;
        cursor: pointer;
        margin: 0 5px 15px 5px;
        transition: all 0.3s ease;
    }

    .filter-btn.active {
        background-color: #27ae60;
        color: white;
        border-color: #27ae60;
    }

    .filter-btn:hover {
        border-color: #27ae60;
    }

    .filter-buttons {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-bottom: 30px;
    }
`;
document.head.appendChild(style);
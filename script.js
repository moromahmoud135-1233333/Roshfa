// ========== Products Database ==========
const products = [
    // ========== Citrus Juices ==========
    { id: 1, name: 'عصير البرتقال الطازة', enName: 'Fresh Orange Juice', price: 15, category: 'citrus', emoji: '🍊', description: 'برتقال طازة 100%' },
    { id: 2, name: 'عصير الليمون الحامض', enName: 'Lemon Juice', price: 12, category: 'citrus', emoji: '🍋', description: 'منعش وطازة جداً' },
    { id: 3, name: 'عصير الجريب فروت', enName: 'Grapefruit Juice', price: 18, category: 'citrus', emoji: '🍊', description: 'حمضي وصحي' },
    { id: 4, name: 'عصير البرتقال والليمون', enName: 'Orange Lemon Mix', price: 16, category: 'citrus', emoji: '🍋', description: 'مزيج منعش' },
    { id: 5, name: 'عصير اليوسفي', enName: 'Tangerine Juice', price: 14, category: 'citrus', emoji: '🍊', description: 'حلو وطازة' },
    { id: 6, name: 'عصير الكيوي والليمون', enName: 'Kiwi Lemon', price: 20, category: 'citrus', emoji: '🥝', description: 'مزيج استثنائي' },
    { id: 7, name: 'عصير الجزر والبرتقال', enName: 'Carrot Orange', price: 17, category: 'citrus', emoji: '🥕', description: 'غني بالفيتامينات' },
    { id: 8, name: 'عصير الليمون بالنعناع', enName: 'Mint Lemon', price: 14, category: 'citrus', emoji: '🍋', description: 'منعش وبارد' },

    // ========== Tropical Juices ==========
    { id: 9, name: 'عصير المانجو الملكي', enName: 'Royal Mango Juice', price: 22, category: 'tropical', emoji: '🥭', description: 'ألذ مانجو' },
    { id: 10, name: 'عصير الأناناس الحلو', enName: 'Sweet Pineapple', price: 20, category: 'tropical', emoji: '🍍', description: 'استوائي شهي' },
    { id: 11, name: 'عصير جوز الهند', enName: 'Coconut Juice', price: 25, category: 'tropical', emoji: '🥥', description: 'بارد ومنعش' },
    { id: 12, name: 'عصير المانجو والأناناس', enName: 'Mango Pineapple', price: 24, category: 'tropical', emoji: '🥭', description: 'مزيج استوائي' },
    { id: 13, name: 'عصير الجوافة', enName: 'Guava Juice', price: 18, category: 'tropical', emoji: '🍓', description: 'غني بالفيتامين ج' },
    { id: 14, name: 'عصير الشمام', enName: 'Cantaloupe Juice', price: 16, category: 'tropical', emoji: '🍈', description: 'حلو وطازة' },
    { id: 15, name: 'عصير البابايا', enName: 'Papaya Juice', price: 21, category: 'tropical', emoji: '🍑', description: 'صحي وحلو' },
    { id: 16, name: 'عصير التمر الهندي', enName: 'Tamarind Juice', price: 19, category: 'tropical', emoji: '🍶', description: 'حامض ولذيذ' },
    { id: 17, name: 'عصير الرمان والمانجو', enName: 'Pomegranate Mango', price: 26, category: 'tropical', emoji: '🥭', description: 'فاخر وغني' },
    { id: 18, name: 'عصير الكاكاو الاستوائي', enName: 'Tropical Cacao', price: 23, category: 'tropical', emoji: '🍫', description: 'حلو ولذيذ' },

    // ========== Berry Juices ==========
    { id: 19, name: 'عصير الفراولة', enName: 'Strawberry Juice', price: 20, category: 'berries', emoji: '🍓', description: 'حلو وحامض' },
    { id: 20, name: 'عصير التوت الأسود', enName: 'Blackberry Juice', price: 22, category: 'berries', emoji: '🫐', description: 'غني بالمضادات' },
    { id: 21, name: 'عصير التوت الأحمر', enName: 'Raspberry Juice', price: 21, category: 'berries', emoji: '🍓', description: 'لذيذ وصحي' },
    { id: 22, name: 'عصير التوت المختلط', enName: 'Mixed Berries', price: 24, category: 'berries', emoji: '🫐', description: 'مزيج التوت الفاخر' },
    { id: 23, name: 'عصير الفراولة والكريمة', enName: 'Strawberry Cream', price: 25, category: 'berries', emoji: '🍓', description: 'فاخر وحلو' },
    { id: 24, name: 'عصير العنب البري', enName: 'Blueberry Juice', price: 23, category: 'berries', emoji: '🫐', description: 'صحي ولذيذ' },
    { id: 25, name: 'عصير الفراولة والليمون', enName: 'Strawberry Lemon', price: 19, category: 'berries', emoji: '🍓', description: 'منعش وحلو' },
    { id: 26, name: 'عصير التوت والرمان', enName: 'Berry Pomegranate', price: 26, category: 'berries', emoji: '🫐', description: 'فاخر وغني' },

    // ========== Green & Healthy Juices ==========
    { id: 27, name: 'عصير أخضر صحي', enName: 'Healthy Green Juice', price: 28, category: 'green', emoji: '💚', description: 'صحي وطازة' },
    { id: 28, name: 'عصير السبانخ والتفاح', enName: 'Spinach Apple', price: 26, category: 'green', emoji: '🥗', description: 'غني بالفيتامينات' },
    { id: 29, name: 'عصير الكرفس والتفاح', enName: 'Celery Apple Juice', price: 27, category: 'green', emoji: '🥬', description: 'تطهير وصحة' },
    { id: 30, name: 'عصير الكيوي والأناناس', enName: 'Kiwi Pineapple', price: 25, category: 'green', emoji: '🥝', description: 'أخضر وحلو' },
    { id: 31, name: 'عصير الخيار والليمون', enName: 'Cucumber Lemon', price: 18, category: 'green', emoji: '🥒', description: 'منعش وصحي' },
    { id: 32, name: 'عصير الزنجبيل والعسل', enName: 'Ginger Honey', price: 24, category: 'green', emoji: '🍯', description: 'دافئ وصحي' },
    { id: 33, name: 'عصير الشاي الأخضر', enName: 'Green Tea Juice', price: 22, category: 'green', emoji: '🍵', description: 'صحي ومنعش' },
    { id: 34, name: 'عصير الأفوكادو والعسل', enName: 'Avocado Honey', price: 30, category: 'green', emoji: '🥑', description: 'فاخر وغني' },

    // ========== Coffee - القهوة ==========
    { id: 35, name: 'قهوة اسبريسو', enName: 'Espresso Coffee', price: 18, category: 'coffee', emoji: '☕', description: 'قوية ومركزة' },
    { id: 36, name: 'لاتيه كلاسيكي', enName: 'Classic Latte', price: 22, category: 'coffee', emoji: '☕', description: 'حليب وقهوة' },
    { id: 37, name: 'كابتشينو فاخر', enName: 'Premium Cappuccino', price: 24, category: 'coffee', emoji: '☕', description: 'رغوة كريمية' },
    { id: 38, name: 'موكا شوكولاتة', enName: 'Chocolate Mocha', price: 26, category: 'coffee', emoji: '☕', description: 'قهوة وشوكولاتة' },
    { id: 39, name: 'لاتيه الكراميل', enName: 'Caramel Latte', price: 25, category: 'coffee', emoji: '☕', description: 'حلو ولذيذ' },
    { id: 40, name: 'قهوة الفانيليا', enName: 'Vanilla Coffee', price: 23, category: 'coffee', emoji: '☕', description: 'عطرية وحلوة' },
    { id: 41, name: 'أيس لاتيه', enName: 'Iced Latte', price: 24, category: 'coffee', emoji: '🧊', description: 'بارد ومنعش' },
    { id: 42, name: 'أيس موكا', enName: 'Iced Mocha', price: 27, category: 'coffee', emoji: '🧊', description: 'قهوة شوكولاتة باردة' },
    { id: 43, name: 'أيس كابتشينو', enName: 'Iced Cappuccino', price: 26, category: 'coffee', emoji: '🧊', description: 'رائع وبارد' },
    { id: 44, name: 'كوفي ماتشا', enName: 'Matcha Coffee', price: 28, category: 'coffee', emoji: '☕', description: 'مزيج متميز' },
    { id: 45, name: 'قهوة الفستق', enName: 'Pistachio Coffee', price: 25, category: 'coffee', emoji: '☕', description: 'نكهة فريدة' },
    { id: 46, name: 'أيس أفوجاتو', enName: 'Affogato Ice Cream', price: 28, category: 'coffee', emoji: '🍦', description: 'قهوة بآيسكريم' },

    // ========== Hot Drinks - المشروبات الساخنة ==========
    { id: 47, name: 'شاي أسود كلاسيكي', enName: 'Black Tea', price: 16, category: 'hot', emoji: '🍵', description: 'شاي طازة' },
    { id: 48, name: 'شاي أخضر صحي', enName: 'Green Tea', price: 18, category: 'hot', emoji: '🍵', description: 'صحي ومنعش' },
    { id: 49, name: 'شاي بالنعناع', enName: 'Mint Tea', price: 17, category: 'hot', emoji: '🍵', description: 'منعش وهادي' },
    { id: 50, name: 'شاي الجنجبيل والعسل', enName: 'Ginger Honey Tea', price: 19, category: 'hot', emoji: '🍵', description: 'دافئ وصحي' },
    { id: 51, name: 'شاي الليمون والعسل', enName: 'Lemon Honey Tea', price: 18, category: 'hot', emoji: '🍵', description: 'مهدئ ولذيذ' },
    { id: 52, name: 'شاي الزهور', enName: 'Flower Tea', price: 20, category: 'hot', emoji: '🍵', description: 'عطري وجميل' },
    { id: 53, name: 'شاي البابونج', enName: 'Chamomile Tea', price: 17, category: 'hot', emoji: '🍵', description: 'مهدئ للأعصاب' },
    { id: 54, name: 'شاي الكركم والعسل', enName: 'Turmeric Honey Tea', price: 22, category: 'hot', emoji: '🍵', description: 'مضاد التهاب' },
    { id: 55, name: 'شاي ركاي', enName: 'Rosehip Tea', price: 19, category: 'hot', emoji: '🍵', description: 'غني بفيتامين ج' },
    { id: 56, name: 'شاي الرمان', enName: 'Pomegranate Tea', price: 21, category: 'hot', emoji: '🍵', description: 'فاخر وصحي' },
    { id: 57, name: 'كوكو ساخن', enName: 'Hot Chocolate', price: 24, category: 'hot', emoji: '☕', description: 'دافئ وحلو' },
    { id: 58, name: 'كوكو بالقرفة', enName: 'Cinnamon Hot Chocolate', price: 26, category: 'hot', emoji: '☕', description: 'عطري وفاخر' },

    // ========== Smoothies & Milkshakes ==========
    { id: 59, name: 'سموثي الفراولة', enName: 'Strawberry Smoothie', price: 25, category: 'smoothie', emoji: '🍓', description: 'كريمي وحلو' },
    { id: 60, name: 'سموثي المانجو', enName: 'Mango Smoothie', price: 27, category: 'smoothie', emoji: '🥭', description: 'سميك وشهي' },
    { id: 61, name: 'سموثي التوت', enName: 'Berry Smoothie', price: 28, category: 'smoothie', emoji: '🫐', description: 'غني بالفيتامينات' },
    { id: 62, name: 'سموثي الموز والعسل', enName: 'Banana Honey Smoothie', price: 24, category: 'smoothie', emoji: '🍌', description: 'طاقة وصحة' },
    { id: 63, name: 'سموثي الأفوكادو', enName: 'Avocado Smoothie', price: 30, category: 'smoothie', emoji: '🥑', description: 'فاخر وكريمي' },
    { id: 64, name: 'ميلك شيك الفانيليا', enName: 'Vanilla Milkshake', price: 26, category: 'smoothie', emoji: '🥛', description: 'كلاسيكي ولذيذ' },
    { id: 65, name: 'ميلك شيك الشوكولاتة', enName: 'Chocolate Milkshake', price: 27, category: 'smoothie', emoji: '🍫', description: 'حلو جداً' },
    { id: 66, name: 'ميلك شيك الفراولة', enName: 'Strawberry Milkshake', price: 27, category: 'smoothie', emoji: '🍓', description: 'طازة ولذيذة' },
    { id: 67, name: 'سموثي الأناناس والجوز', enName: 'Pineapple Coconut', price: 28, category: 'smoothie', emoji: '🍍', description: 'استوائي رائع' },
    { id: 68, name: 'سموثي الكيوي والجوافة', enName: 'Kiwi Guava', price: 26, category: 'smoothie', emoji: '🥝', description: 'حامض وحلو' },

    // ========== Fresh Lemonade & Drinks ==========
    { id: 69, name: 'عصير ليمون بارد', enName: 'Cold Lemonade', price: 15, category: 'lemonade', emoji: '🍋', description: 'منعش جداً' },
    { id: 70, name: 'ليمون بالنعناع', enName: 'Lemon Mint', price: 17, category: 'lemonade', emoji: '🍋', description: 'منعش وبارد' },
    { id: 71, name: 'ليمون بالعسل', enName: 'Lemon Honey', price: 18, category: 'lemonade', emoji: '🍋', description: 'حلو ومنعش' },
    { id: 72, name: 'ليمون بالزنجبيل', enName: 'Lemon Ginger', price: 19, category: 'lemonade', emoji: '🍋', description: 'حار ومنعش' },
    { id: 73, name: 'ليمون بالكركم', enName: 'Lemon Turmeric', price: 20, category: 'lemonade', emoji: '🍋', description: 'صحي ومنعش' },
    { id: 74, name: 'عصير الليمون المركز', enName: 'Fresh Lemon Juice', price: 16, category: 'lemonade', emoji: '🍋', description: 'طازة 100%' },
    { id: 75, name: 'شربة برتقال وليمون', enName: 'Orange Lemon Mix', price: 17, category: 'lemonade', emoji: '🍊', description: 'مزيج متوازن' },
    { id: 76, name: 'شربة الرمان والليمون', enName: 'Pomegranate Lemon', price: 22, category: 'lemonade', emoji: '🍋', description: 'فاخر ومنعش' },

    // ========== Special & Premium ==========
    { id: 77, name: 'عصير الرمان الفاخر', enName: 'Premium Pomegranate', price: 28, category: 'premium', emoji: '🍎', description: 'جودة عالية' },
    { id: 78, name: 'عصير العنب الأحمر', enName: 'Red Grapes Juice', price: 26, category: 'premium', emoji: '🍇', description: 'فاخر وغني' },
    { id: 79, name: 'عصير التوت والرمان', enName: 'Berry Pomegranate', price: 30, category: 'premium', emoji: '🫐', description: 'فاخر جداً' },
    { id: 80, name: 'عصير الجزر والزنجبيل', enName: 'Carrot Ginger', price: 22, category: 'premium', emoji: '🥕', description: 'صحي وقوي' },
    { id: 81, name: 'عصير الخضار المختلط', enName: 'Mixed Vegetable', price: 27, category: 'premium', emoji: '🥬', description: 'صحي 100%' },
    { id: 82, name: 'عصير الشمندر والجزر', enName: 'Beetroot Carrot', price: 25, category: 'premium', emoji: '🥕', description: 'صحي وقوي' },
    { id: 83, name: 'عصير الأناناس والزنجبيل', enName: 'Pineapple Ginger', price: 24, category: 'premium', emoji: '🍍', description: 'منعش وقوي' },
    { id: 84, name: 'عصير الجوافة والعنب', enName: 'Guava Grape', price: 26, category: 'premium', emoji: '🍇', description: 'حلو وصحي' },
    { id: 85, name: 'عصير التمر والحليب', enName: 'Date Milk Juice', price: 28, category: 'premium', emoji: '🥛', description: 'طاقة عالية' },
    { id: 86, name: 'عصير المكسرات والعسل', enName: 'Nuts Honey Juice', price: 32, category: 'premium', emoji: '🥜', description: 'فاخر وغني' },
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
                <div class="product-price">${product.price} ج.م</div>
                <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', '${product.enName}', ${product.price})">
                    <span class="ar-text">أضف للسلة</span>
                    <span class="en-text">Add to Cart</span>
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    updateFilterButtons(category);
}

// ========== Filter Products ==========
function filterProducts(category) {
    loadProducts(category);
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
                <span>${item.price} ج.م</span>
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

    let message = currentLanguage === 'ar' ? 'مرحباً، طلبي من رشفة:\n\n' : 'Hello, my order from Roshfa:\n\n';
    let total = 0;

    cart.forEach(item => {
        const itemName = currentLanguage === 'ar' ? item.name : item.enName;
        message += `• ${itemName} - ${item.price} ج.م\n`;
        total += item.price;
    });

    message += `\n---\n`;
    message += currentLanguage === 'ar' ? `المجموع: ${total} ج.م\n\nشكراً! 🙏` : `Total: ${total} EGP\n\nThank you! 🙏`;

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
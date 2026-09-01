// ========== COMPLETE PRODUCTS DATABASE (105 ITEMS WITH IMAGES) ==========
const products = [
    // ========== CITRUS JUICES (10) ==========
    { id: 1, name: 'عصير برتقال طازة', enName: 'Fresh Orange Juice', price: 15, category: 'citrus', emoji: '🍊', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop', description: 'برتقال طازة 100%' },
    { id: 2, name: 'عصير ليمون حامض', enName: 'Lemon Juice', price: 12, category: 'citrus', emoji: '🍋', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'منعش وطازة' },
    { id: 3, name: 'عصير جريب فروت', enName: 'Grapefruit Juice', price: 18, category: 'citrus', emoji: '🍊', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop', description: 'حمضي وصحي' },
    { id: 4, name: 'عصير برتقال وليمون', enName: 'Orange Lemon Mix', price: 16, category: 'citrus', emoji: '🍋', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'مزيج منعش' },
    { id: 5, name: 'عصير اليوسفي', enName: 'Tangerine Juice', price: 14, category: 'citrus', emoji: '🍊', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop', description: 'حلو وطازة' },
    { id: 6, name: 'عصير الكيوي والليمون', enName: 'Kiwi Lemon', price: 20, category: 'citrus', emoji: '🥝', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'مزيج استثنائي' },
    { id: 7, name: 'عصير جزر وبرتقال', enName: 'Carrot Orange', price: 17, category: 'citrus', emoji: '🥕', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'غني بالفيتامينات' },
    { id: 8, name: 'عصير ليمون بنعناع', enName: 'Mint Lemon', price: 14, category: 'citrus', emoji: '🍋', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'منعش وبارد' },
    { id: 9, name: 'عصير ليمون بعسل', enName: 'Honey Lemon', price: 16, category: 'citrus', emoji: '🍯', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'حلو ومنعش' },
    { id: 10, name: 'عصير برتقال بالنعناع', enName: 'Orange Mint', price: 15, category: 'citrus', emoji: '🍊', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop', description: 'مزيج رائع' },

    // ========== TROPICAL JUICES (15) ==========
    { id: 11, name: 'عصير مانجو ملكي', enName: 'Royal Mango', price: 22, category: 'tropical', emoji: '🥭', image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd1f?w=300&h=300&fit=crop', description: 'ألذ مانجو' },
    { id: 12, name: 'عصير أناناس حلو', enName: 'Sweet Pineapple', price: 20, category: 'tropical', emoji: '🍍', image: 'https://images.unsplash.com/photo-1535920527894-b400150fecee?w=300&h=300&fit=crop', description: 'استوائي شهي' },
    { id: 13, name: 'عصير جوز الهند', enName: 'Coconut Juice', price: 25, category: 'tropical', emoji: '🥥', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'بارد ومنعش' },
    { id: 14, name: 'عصير مانجو وأناناس', enName: 'Mango Pineapple', price: 24, category: 'tropical', emoji: '🥭', image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd1f?w=300&h=300&fit=crop', description: 'مزيج استوائي' },
    { id: 15, name: 'عصير جوافة', enName: 'Guava Juice', price: 18, category: 'tropical', emoji: '🍓', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'غني بالفيتامين ج' },
    { id: 16, name: 'عصير شمام', enName: 'Cantaloupe', price: 16, category: 'tropical', emoji: '🍈', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'حلو وطازة' },
    { id: 17, name: 'عصير بابايا', enName: 'Papaya Juice', price: 21, category: 'tropical', emoji: '🍑', image: 'https://images.unsplash.com/photo-1535920527894-b400150fecee?w=300&h=300&fit=crop', description: 'صحي وحلو' },
    { id: 18, name: 'عصير تمر هندي', enName: 'Tamarind Juice', price: 19, category: 'tropical', emoji: '🍶', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'حامض ولذيذ' },
    { id: 19, name: 'عصير رمان ومانجو', enName: 'Pomegranate Mango', price: 26, category: 'tropical', emoji: '🥭', image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd1f?w=300&h=300&fit=crop', description: 'فاخر وغني' },
    { id: 20, name: 'عصير مانجو بالكريم', enName: 'Mango Cream', price: 28, category: 'tropical', emoji: '🥭', image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd1f?w=300&h=300&fit=crop', description: 'ناعم وحلو' },
    { id: 21, name: 'عصير أناناس وجوز', enName: 'Pineapple Coconut', price: 23, category: 'tropical', emoji: '🍍', image: 'https://images.unsplash.com/photo-1535920527894-b400150fecee?w=300&h=300&fit=crop', description: 'مزيج فريد' },
    { id: 22, name: 'عصير مانجو والبابايا', enName: 'Mango Papaya', price: 24, category: 'tropical', emoji: '🥭', image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd1f?w=300&h=300&fit=crop', description: 'حلو وغني' },
    { id: 23, name: 'عصير الشمام بالنعناع', enName: 'Mint Cantaloupe', price: 18, category: 'tropical', emoji: '🍈', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'منعش جداً' },
    { id: 24, name: 'عصير جوافة وأناناس', enName: 'Guava Pineapple', price: 21, category: 'tropical', emoji: '🍍', image: 'https://images.unsplash.com/photo-1535920527894-b400150fecee?w=300&h=300&fit=crop', description: 'حامض وحلو' },
    { id: 25, name: 'عصير التمر بالحليب', enName: 'Date Milk', price: 26, category: 'tropical', emoji: '🥛', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'طاقة عالية' },

    // ========== BERRY JUICES (12) ==========
    { id: 26, name: 'عصير فراولة', enName: 'Strawberry Juice', price: 20, category: 'berries', emoji: '🍓', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'حلو وحامض' },
    { id: 27, name: 'عصير توت أسود', enName: 'Blackberry Juice', price: 22, category: 'berries', emoji: '🫐', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'غني بالمضادات' },
    { id: 28, name: 'عصير توت أحمر', enName: 'Raspberry Juice', price: 21, category: 'berries', emoji: '🍓', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'لذيذ وصحي' },
    { id: 29, name: 'عصير توت مختلط', enName: 'Mixed Berries', price: 24, category: 'berries', emoji: '🫐', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'مزيج فاخر' },
    { id: 30, name: 'عصير فراولة والكريمة', enName: 'Strawberry Cream', price: 25, category: 'berries', emoji: '🍓', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'فاخر وحلو' },
    { id: 31, name: 'عصير عنب بري', enName: 'Blueberry', price: 23, category: 'berries', emoji: '🫐', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'صحي ولذيذ' },
    { id: 32, name: 'عصير فراولة وليمون', enName: 'Strawberry Lemon', price: 19, category: 'berries', emoji: '🍓', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'منعش' },
    { id: 33, name: 'عصير توت ورمان', enName: 'Berry Pomegranate', price: 26, category: 'berries', emoji: '🫐', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'فاخر' },
    { id: 34, name: 'عصير التوت بالعسل', enName: 'Berry Honey', price: 24, category: 'berries', emoji: '🍯', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'حلو وصحي' },
    { id: 35, name: 'عصير فراولة بنعناع', enName: 'Strawberry Mint', price: 21, category: 'berries', emoji: '🍓', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'منعش' },
    { id: 36, name: 'عصير التوت والجوافة', enName: 'Berry Guava', price: 23, category: 'berries', emoji: '🫐', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'مزيج حامض' },
    { id: 37, name: 'عصير فراولة وموز', enName: 'Strawberry Banana', price: 22, category: 'berries', emoji: '🍓', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'كريمي وحلو' },

    // ========== GREEN & HEALTHY (12) ==========
    { id: 38, name: 'عصير أخضر صحي', enName: 'Healthy Green', price: 28, category: 'green', emoji: '💚', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'صحي وطازة' },
    { id: 39, name: 'عصير سبانخ وتفاح', enName: 'Spinach Apple', price: 26, category: 'green', emoji: '🥗', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'غني بالفيتامينات' },
    { id: 40, name: 'عصير كرفس وتفاح', enName: 'Celery Apple', price: 27, category: 'green', emoji: '🥬', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'تطهير وصحة' },
    { id: 41, name: 'عصير كيوي وأناناس', enName: 'Kiwi Pineapple', price: 25, category: 'green', emoji: '🥝', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'أخضر وحلو' },
    { id: 42, name: 'عصير خيار وليمون', enName: 'Cucumber Lemon', price: 18, category: 'green', emoji: '🥒', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'منعش وصحي' },
    { id: 43, name: 'عصير زنجبيل وعسل', enName: 'Ginger Honey', price: 24, category: 'green', emoji: '🍯', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'دافئ وصحي' },
    { id: 44, name: 'عصير شاي أخضر', enName: 'Green Tea Juice', price: 22, category: 'green', emoji: '🍵', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'صحي ومنعش' },
    { id: 45, name: 'عصير أفوكادو وعسل', enName: 'Avocado Honey', price: 30, category: 'green', emoji: '🥑', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'فاخر وغني' },
    { id: 46, name: 'عصير جزر وزنجبيل', enName: 'Carrot Ginger', price: 22, category: 'green', emoji: '🥕', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'صحي وقوي' },
    { id: 47, name: 'عصير خضار مختلط', enName: 'Mixed Vegetables', price: 27, category: 'green', emoji: '🥬', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'صحي 100%' },
    { id: 48, name: 'عصير شمندر وجزر', enName: 'Beetroot Carrot', price: 25, category: 'green', emoji: '🥕', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'صحي وقوي' },
    { id: 49, name: 'عصير الكيوي والخيار', enName: 'Kiwi Cucumber', price: 24, category: 'green', emoji: '🥒', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'منعش جداً' },

    // ========== COFFEE (15) ☕ ==========
    { id: 50, name: 'قهوة اسبريسو', enName: 'Espresso', price: 18, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'قوية ومركزة' },
    { id: 51, name: 'لاتيه كلاسيكي', enName: 'Classic Latte', price: 22, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'حليب وقهوة' },
    { id: 52, name: 'كابتشينو فاخر', enName: 'Cappuccino', price: 24, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'رغوة كريمية' },
    { id: 53, name: 'موكا شوكولاتة', enName: 'Mocha', price: 26, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'قهوة وشوكولاتة' },
    { id: 54, name: 'لاتيه الكراميل', enName: 'Caramel Latte', price: 25, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'حلو ولذيذ' },
    { id: 55, name: 'قهوة الفانيليا', enName: 'Vanilla Coffee', price: 23, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'عطرية وحلوة' },
    { id: 56, name: 'أيس لاتيه', enName: 'Iced Latte', price: 24, category: 'coffee', emoji: '🧊', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'بارد ومنعش' },
    { id: 57, name: 'أيس موكا', enName: 'Iced Mocha', price: 27, category: 'coffee', emoji: '🧊', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'قهوة باردة' },
    { id: 58, name: 'أيس كابتشينو', enName: 'Iced Cappuccino', price: 26, category: 'coffee', emoji: '🧊', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'رائع وبارد' },
    { id: 59, name: 'ماتشا كوفي', enName: 'Matcha Latte', price: 28, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'مزيج متميز' },
    { id: 60, name: 'قهوة الفستق', enName: 'Pistachio Coffee', price: 25, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'نكهة فريدة' },
    { id: 61, name: 'أفوجاتو بالآيس', enName: 'Affogato', price: 28, category: 'coffee', emoji: '🍦', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'قهوة بآيسكريم' },
    { id: 62, name: 'لاتيه الهيل', enName: 'Cardamom Latte', price: 24, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'عطري جداً' },
    { id: 63, name: 'قهوة سادة', enName: 'Black Coffee', price: 16, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'بسيطة وقوية' },
    { id: 64, name: 'كابتشينو بالعسل', enName: 'Honey Cappuccino', price: 25, category: 'coffee', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'حلو وفاخر' },

    // ========== HOT DRINKS (18) 🍵 ==========
    { id: 65, name: 'شاي أسود', enName: 'Black Tea', price: 16, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'شاي طازة' },
    { id: 66, name: 'شاي أخضر', enName: 'Green Tea', price: 18, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'صحي ومنعش' },
    { id: 67, name: 'شاي بالنعناع', enName: 'Mint Tea', price: 17, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'منعش وهادي' },
    { id: 68, name: 'شاي زنجبيل وعسل', enName: 'Ginger Tea', price: 19, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'دافئ وصحي' },
    { id: 69, name: 'شاي ليمون وعسل', enName: 'Lemon Honey Tea', price: 18, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'مهدئ ولذيذ' },
    { id: 70, name: 'شاي الزهور', enName: 'Flower Tea', price: 20, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'عطري وجميل' },
    { id: 71, name: 'شاي البابونج', enName: 'Chamomile', price: 17, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'مهدئ للأعصاب' },
    { id: 72, name: 'شاي كركم وعسل', enName: 'Turmeric Tea', price: 22, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'مضاد التهاب' },
    { id: 73, name: 'شاي الورد', enName: 'Rosehip Tea', price: 19, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'غني بفيتامين ج' },
    { id: 74, name: 'شاي الرمان', enName: 'Pomegranate Tea', price: 21, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'فاخر وصحي' },
    { id: 75, name: 'كوكو ساخن', enName: 'Hot Chocolate', price: 24, category: 'hot', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'دافئ وحلو' },
    { id: 76, name: 'كوكو بالقرفة', enName: 'Cinnamon Cocoa', price: 26, category: 'hot', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'عطري وفاخر' },
    { id: 77, name: 'شاي بالقرفة', enName: 'Cinnamon Tea', price: 18, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'عطري وحلو' },
    { id: 78, name: 'شاي الكركديه', enName: 'Hibiscus Tea', price: 17, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'حامض ومنعش' },
    { id: 79, name: 'شاي الجنسنج', enName: 'Ginseng Tea', price: 22, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'طاقة وحيوية' },
    { id: 80, name: 'شاي اليانسون', enName: 'Anise Tea', price: 16, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'هادئ ولذيذ' },
    { id: 81, name: 'كوكو بالعسل', enName: 'Honey Cocoa', price: 25, category: 'hot', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'حلو جداً' },
    { id: 82, name: 'شاي اللافندر', enName: 'Lavender Tea', price: 20, category: 'hot', emoji: '🍵', image: 'https://images.unsplash.com/photo-1597318348120-c15c06edd28d?w=300&h=300&fit=crop', description: 'هادئ ومريح' },

    // ========== SMOOTHIES & SHAKES (15) ==========
    { id: 83, name: 'سموثي فراولة', enName: 'Strawberry Smoothie', price: 25, category: 'smoothie', emoji: '🍓', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'كريمي وحلو' },
    { id: 84, name: 'سموثي مانجو', enName: 'Mango Smoothie', price: 27, category: 'smoothie', emoji: '🥭', image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd1f?w=300&h=300&fit=crop', description: 'سميك وشهي' },
    { id: 85, name: 'سموثي التوت', enName: 'Berry Smoothie', price: 28, category: 'smoothie', emoji: '🫐', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'غني بالفيتامينات' },
    { id: 86, name: 'سموثي موز وعسل', enName: 'Banana Honey', price: 24, category: 'smoothie', emoji: '🍌', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'طاقة وصحة' },
    { id: 87, name: 'سموثي أفوكادو', enName: 'Avocado Smoothie', price: 30, category: 'smoothie', emoji: '🥑', image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd1f?w=300&h=300&fit=crop', description: 'فاخر وكريمي' },
    { id: 88, name: 'ميلك شيك فانيليا', enName: 'Vanilla Shake', price: 26, category: 'smoothie', emoji: '🥛', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'كلاسيكي' },
    { id: 89, name: 'ميلك شيك شوكولاتة', enName: 'Chocolate Shake', price: 27, category: 'smoothie', emoji: '🍫', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'حلو جداً' },
    { id: 90, name: 'سموثي الكيوي', enName: 'Kiwi Smoothie', price: 26, category: 'smoothie', emoji: '🥝', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'أخضر وحلو' },
    { id: 91, name: 'سموثي الأناناس', enName: 'Pineapple Smoothie', price: 25, category: 'smoothie', emoji: '🍍', image: 'https://images.unsplash.com/photo-1535920527894-b400150fecee?w=300&h=300&fit=crop', description: 'استوائي رائع' },
    { id: 92, name: 'ميلك شيك الفراولة', enName: 'Strawberry Shake', price: 27, category: 'smoothie', emoji: '🍓', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'طازة ولذيذة' },
    { id: 93, name: 'سموثي الموز والتوت', enName: 'Banana Berry', price: 28, category: 'smoothie', emoji: '🍌', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'كريمي وحامض' },
    { id: 94, name: 'سموثي الشوكولاتة والموز', enName: 'Choco Banana', price: 26, category: 'smoothie', emoji: '🍌', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'فاخر وحلو' },
    { id: 95, name: 'سموثي الجوافة', enName: 'Guava Smoothie', price: 24, category: 'smoothie', emoji: '🍓', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'حامض وحلو' },
    { id: 96, name: 'ميلك شيك التوت', enName: 'Berry Shake', price: 28, category: 'smoothie', emoji: '🫐', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'غني بالصحة' },
    { id: 97, name: 'سموثي الرمان والتفاح', enName: 'Pomegranate Apple', price: 26, category: 'smoothie', emoji: '🍎', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'حامض وحلو' },

    // ========== PREMIUM & SPECIAL (8) 👑 ==========
    { id: 98, name: 'عصير رمان فاخر', enName: 'Premium Pomegranate', price: 28, category: 'premium', emoji: '🍎', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'جودة عالية' },
    { id: 99, name: 'عصير عنب أحمر', enName: 'Red Grapes', price: 26, category: 'premium', emoji: '🍇', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=300&fit=crop', description: 'فاخر وغني' },
    { id: 100, name: 'عصير التوت والرمان', enName: 'Premium Berry Mix', price: 30, category: 'premium', emoji: '🫐', image: 'https://images.unsplash.com/photo-1585518419759-c1d74ee5b614?w=300&h=300&fit=crop', description: 'فاخر جداً' },
    { id: 101, name: 'عصير الشوكولاتة الفاخر', enName: 'Premium Chocolate', price: 28, category: 'premium', emoji: '🍫', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop', description: 'حلو وفاخر' },
    { id: 102, name: 'عصير الذهب (ذهبي)', enName: 'Golden Juice', price: 32, category: 'premium', emoji: '✨', image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd1f?w=300&h=300&fit=crop', description: 'مزيج ملكي' },
    { id: 103, name: 'قهوة الذهب المميزة', enName: 'Gold Coffee', price: 35, category: 'premium', emoji: '☕', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=300&h=300&fit=crop', description: 'قهوة فاخرة جداً' },
    { id: 104, name: 'سموثي الأكاي بيري', enName: 'Acai Berry Premium', price: 32, category: 'premium', emoji: '🫐', image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd93cc7?w=300&h=300&fit=crop', description: 'صحي وفاخر' },
    { id: 105, name: 'عصير المكسرات والعسل', enName: 'Nuts Honey Premium', price: 35, category: 'premium', emoji: '🥜', image: 'https://images.unsplash.com/photo-1570246814968-faf9ca9d3f4c?w=300&h=300&fit=crop', description: 'فاخر وغني' },
];

let cart = [];
let currentLanguage = 'ar';
let allProducts = [...products];

// ========== Initialize ==========
window.addEventListener('DOMContentLoaded', () => {
    loadProducts('all');
    setupLanguageToggle();
    setupFormSubmit();
});

// ========== Load & Display Products ==========
function loadProducts(category) {
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';

    const filteredProducts = category === 'all' 
        ? allProducts 
        : allProducts.filter(p => p.category === category);

    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = '<p class="no-products">لا توجد منتجات</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
                <div class="emoji-backup">${product.emoji}</div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price} ج.م</div>
                <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price})">أضف للسلة</button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// ========== Search Products ==========
function searchProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    if (searchTerm === '') {
        allProducts = [...products];
        loadProducts('all');
        return;
    }
    
    allProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.enName.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm)
    );
    
    loadProducts('all');
}

// ========== Filter Products ==========
function filterProducts(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (category === 'all') {
        allProducts = [...products];
    } else {
        allProducts = products.filter(p => p.category === category);
    }
    
    loadProducts(category);
}

// ========== Cart Functions ==========
function addToCart(id, name, price) {
    cart.push({ id, name, price });
    updateCartCount();
    showNotification('✅ تم الإضافة للسلة!');
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
        cartItems.innerHTML = '<p style="text-align:center; padding:20px;">السلة فارغة</p>';
        return;
    }

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <span>${item.name}</span>
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
        alert('أضف منتجات للسلة أولاً');
        return;
    }

    let message = 'مرحباً، طلبي من رشفة 🥤:\n\n';
    let total = 0;

    cart.forEach(item => {
        message += `• ${item.name} - ${item.price} ج.م\n`;
        total += item.price;
    });

    message += `\n---\nالمجموع: ${total} ج.م\n\nشكراً! 🙏`;

    const whatsappLink = `https://wa.me/201010448334?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
}

// ========== Language ==========
function setLanguage(lang) {
    currentLanguage = lang;
}

function setupLanguageToggle() {
    setLanguage('ar');
}

// ========== Form ==========
function setupFormSubmit() {
    const form = document.getElementById('order-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('✅ تم إرسال رسالتك بنجاح!');
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

// ========== Close Modal ==========
window.addEventListener('click', (e) => {
    const modal = document.getElementById('cart-modal');
    if (e.target === modal) closeCart();
});
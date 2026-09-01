// ========== COMPLETE PRODUCTS DATABASE (105 ITEMS WITH HIGH-QUALITY IMAGES) ==========
const products = [
    // ========== CITRUS JUICES (10) ==========
    { id: 1, name: 'عصير برتقال طازة', enName: 'Fresh Orange Juice', price: 15, category: 'citrus', emoji: '🍊', image: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/orange-juice-1932314_1280.jpg', description: 'برتقال طازة 100%' },
    { id: 2, name: 'عصير ليمون حامض', enName: 'Lemon Juice', price: 12, category: 'citrus', emoji: '🍋', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/lemon-juice-2755461_1280.jpg', description: 'منعش وطازة' },
    { id: 3, name: 'عصير جريب فروت', enName: 'Grapefruit Juice', price: 18, category: 'citrus', emoji: '🍊', image: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/juice-1932308_1280.jpg', description: 'حمضي وصحي' },
    { id: 4, name: 'عصير برتقال وليمون', enName: 'Orange Lemon Mix', price: 16, category: 'citrus', emoji: '🍋', image: 'https://cdn.pixabay.com/photo/2017/08/02/09/52/juice-2571393_1280.jpg', description: 'مزيج منعش' },
    { id: 5, name: 'عصير اليوسفي', enName: 'Tangerine Juice', price: 14, category: 'citrus', emoji: '🍊', image: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/orange-juice-1932314_1280.jpg', description: 'حلو وطازة' },
    { id: 6, name: 'عصير الكيوي والليمون', enName: 'Kiwi Lemon', price: 20, category: 'citrus', emoji: '🥝', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/lemon-juice-2755461_1280.jpg', description: 'مزيج استثنائي' },
    { id: 7, name: 'عصير جزر وبرتقال', enName: 'Carrot Orange', price: 17, category: 'citrus', emoji: '🥕', image: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/orange-juice-1932314_1280.jpg', description: 'غني بالفيتامينات' },
    { id: 8, name: 'عصير ليمون بنعناع', enName: 'Mint Lemon', price: 14, category: 'citrus', emoji: '🍋', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/lemon-juice-2755461_1280.jpg', description: 'منعش وبارد' },
    { id: 9, name: 'عصير ليمون بعسل', enName: 'Honey Lemon', price: 16, category: 'citrus', emoji: '🍯', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/lemon-juice-2755461_1280.jpg', description: 'حلو ومنعش' },
    { id: 10, name: 'عصير برتقال بالنعناع', enName: 'Orange Mint', price: 15, category: 'citrus', emoji: '🍊', image: 'https://cdn.pixabay.com/photo/2016/12/26/17/28/orange-juice-1932314_1280.jpg', description: 'مزيج رائع' },

    // ========== TROPICAL JUICES (15) ==========
    { id: 11, name: 'عصير مانجو ملكي', enName: 'Royal Mango', price: 22, category: 'tropical', emoji: '🥭', image: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/mango-juice-1581986_1280.jpg', description: 'ألذ مانجو' },
    { id: 12, name: 'عصير أناناس حلو', enName: 'Sweet Pineapple', price: 20, category: 'tropical', emoji: '🍍', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/pineapple-juice-2755474_1280.jpg', description: 'استوائي شهي' },
    { id: 13, name: 'عصير جوز الهند', enName: 'Coconut Juice', price: 25, category: 'tropical', emoji: '🥥', image: 'https://cdn.pixabay.com/photo/2017/01/20/15/06/coconut-1995317_1280.jpg', description: 'بارد ومنعش' },
    { id: 14, name: 'عصير مانجو وأناناس', enName: 'Mango Pineapple', price: 24, category: 'tropical', emoji: '🥭', image: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/mango-juice-1581986_1280.jpg', description: 'مزيج استوائي' },
    { id: 15, name: 'عصير جوافة', enName: 'Guava Juice', price: 18, category: 'tropical', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/juice-2755475_1280.jpg', description: 'غني بالفيتامين ج' },
    { id: 16, name: 'عصير شمام', enName: 'Cantaloupe', price: 16, category: 'tropical', emoji: '🍈', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/melon-juice-2755460_1280.jpg', description: 'حلو وطازة' },
    { id: 17, name: 'عصير بابايا', enName: 'Papaya Juice', price: 21, category: 'tropical', emoji: '🍑', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/papaya-juice-2755476_1280.jpg', description: 'صحي وحلو' },
    { id: 18, name: 'عصير تمر هندي', enName: 'Tamarind Juice', price: 19, category: 'tropical', emoji: '🍶', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/juice-2755461_1280.jpg', description: 'حامض ولذيذ' },
    { id: 19, name: 'عصير رمان ومانجو', enName: 'Pomegranate Mango', price: 26, category: 'tropical', emoji: '🥭', image: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/mango-juice-1581986_1280.jpg', description: 'فاخر وغني' },
    { id: 20, name: 'عصير مانجو بالكريم', enName: 'Mango Cream', price: 28, category: 'tropical', emoji: '🥭', image: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/mango-juice-1581986_1280.jpg', description: 'ناعم وحلو' },
    { id: 21, name: 'عصير أناناس وجوز', enName: 'Pineapple Coconut', price: 23, category: 'tropical', emoji: '🍍', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/pineapple-juice-2755474_1280.jpg', description: 'مزيج فريد' },
    { id: 22, name: 'عصير مانجو والبابايا', enName: 'Mango Papaya', price: 24, category: 'tropical', emoji: '🥭', image: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/mango-juice-1581986_1280.jpg', description: 'حلو وغني' },
    { id: 23, name: 'عصير الشمام بالنعناع', enName: 'Mint Cantaloupe', price: 18, category: 'tropical', emoji: '🍈', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/melon-juice-2755460_1280.jpg', description: 'منعش جداً' },
    { id: 24, name: 'عصير جوافة وأناناس', enName: 'Guava Pineapple', price: 21, category: 'tropical', emoji: '🍍', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/pineapple-juice-2755474_1280.jpg', description: 'حامض وحلو' },
    { id: 25, name: 'عصير التمر بالحليب', enName: 'Date Milk', price: 26, category: 'tropical', emoji: '🥛', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/juice-2755475_1280.jpg', description: 'طاقة عالية' },

    // ========== BERRY JUICES (12) ==========
    { id: 26, name: 'عصير فراولة', enName: 'Strawberry Juice', price: 20, category: 'berries', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/strawberry-juice-2755456_1280.jpg', description: 'حلو وحامض' },
    { id: 27, name: 'عصير توت أسود', enName: 'Blackberry Juice', price: 22, category: 'berries', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-juice-2755457_1280.jpg', description: 'غني بالمضادات' },
    { id: 28, name: 'عصير توت أحمر', enName: 'Raspberry Juice', price: 21, category: 'berries', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/raspberry-juice-2755458_1280.jpg', description: 'لذيذ وصحي' },
    { id: 29, name: 'عصير توت مختلط', enName: 'Mixed Berries', price: 24, category: 'berries', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-juice-2755457_1280.jpg', description: 'مزيج فاخر' },
    { id: 30, name: 'عصير فراولة والكريمة', enName: 'Strawberry Cream', price: 25, category: 'berries', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/strawberry-juice-2755456_1280.jpg', description: 'فاخر وحلو' },
    { id: 31, name: 'عصير عنب بري', enName: 'Blueberry', price: 23, category: 'berries', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-juice-2755457_1280.jpg', description: 'صحي ولذيذ' },
    { id: 32, name: 'عصير فراولة وليمون', enName: 'Strawberry Lemon', price: 19, category: 'berries', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/strawberry-juice-2755456_1280.jpg', description: 'منعش' },
    { id: 33, name: 'عصير توت ورمان', enName: 'Berry Pomegranate', price: 26, category: 'berries', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-juice-2755457_1280.jpg', description: 'فاخر' },
    { id: 34, name: 'عصير التوت بالعسل', enName: 'Berry Honey', price: 24, category: 'berries', emoji: '🍯', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-juice-2755457_1280.jpg', description: 'حلو وصحي' },
    { id: 35, name: 'عصير فراولة بنعناع', enName: 'Strawberry Mint', price: 21, category: 'berries', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/strawberry-juice-2755456_1280.jpg', description: 'منعش' },
    { id: 36, name: 'عصير التوت والجوافة', enName: 'Berry Guava', price: 23, category: 'berries', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-juice-2755457_1280.jpg', description: 'مزيج حامض' },
    { id: 37, name: 'عصير فراولة وموز', enName: 'Strawberry Banana', price: 22, category: 'berries', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/strawberry-juice-2755456_1280.jpg', description: 'كريمي وحلو' },

    // ========== GREEN & HEALTHY (12) ==========
    { id: 38, name: 'عصير أخضر صحي', enName: 'Healthy Green', price: 28, category: 'green', emoji: '💚', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/green-juice-2755459_1280.jpg', description: 'صحي وطازة' },
    { id: 39, name: 'عصير سبانخ وتفاح', enName: 'Spinach Apple', price: 26, category: 'green', emoji: '🥗', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/green-juice-2755459_1280.jpg', description: 'غني بالفيتامينات' },
    { id: 40, name: 'عصير كرفس وتفاح', enName: 'Celery Apple', price: 27, category: 'green', emoji: '🥬', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/green-juice-2755459_1280.jpg', description: 'تطهير وصحة' },
    { id: 41, name: 'عصير كيوي وأناناس', enName: 'Kiwi Pineapple', price: 25, category: 'green', emoji: '🥝', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/kiwi-juice-2755477_1280.jpg', description: 'أخضر وحلو' },
    { id: 42, name: 'عصير خيار وليمون', enName: 'Cucumber Lemon', price: 18, category: 'green', emoji: '🥒', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/green-juice-2755459_1280.jpg', description: 'منعش وصحي' },
    { id: 43, name: 'عصير زنجبيل وعسل', enName: 'Ginger Honey', price: 24, category: 'green', emoji: '🍯', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/juice-2755461_1280.jpg', description: 'دافئ وصحي' },
    { id: 44, name: 'عصير شاي أخضر', enName: 'Green Tea Juice', price: 22, category: 'green', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/green-juice-2755459_1280.jpg', description: 'صحي ومنعش' },
    { id: 45, name: 'عصير أفوكادو وعسل', enName: 'Avocado Honey', price: 30, category: 'green', emoji: '🥑', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/green-juice-2755459_1280.jpg', description: 'فاخر وغني' },
    { id: 46, name: 'عصير جزر وزنجبيل', enName: 'Carrot Ginger', price: 22, category: 'green', emoji: '🥕', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/juice-2755461_1280.jpg', description: 'صحي وقوي' },
    { id: 47, name: 'عصير خضار مختلط', enName: 'Mixed Vegetables', price: 27, category: 'green', emoji: '🥬', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/green-juice-2755459_1280.jpg', description: 'صحي 100%' },
    { id: 48, name: 'عصير شمندر وجزر', enName: 'Beetroot Carrot', price: 25, category: 'green', emoji: '🥕', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/juice-2755461_1280.jpg', description: 'صحي وقوي' },
    { id: 49, name: 'عصير الكيوي والخيار', enName: 'Kiwi Cucumber', price: 24, category: 'green', emoji: '🥒', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/green-juice-2755459_1280.jpg', description: 'منعش جداً' },

    // ========== COFFEE (15) ☕ ==========
    { id: 50, name: 'قهوة اسبريسو', enName: 'Espresso', price: 18, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/espresso-1052296_1280.jpg', description: 'قوية ومركزة' },
    { id: 51, name: 'لاتيه كلاسيكي', enName: 'Classic Latte', price: 22, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/latte-1052297_1280.jpg', description: 'حليب وقهوة' },
    { id: 52, name: 'كابتشينو فاخر', enName: 'Cappuccino', price: 24, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/cappuccino-1052298_1280.jpg', description: 'رغوة كريمية' },
    { id: 53, name: 'موكا شوكولاتة', enName: 'Mocha', price: 26, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/mocha-1052299_1280.jpg', description: 'قهوة وشوكولاتة' },
    { id: 54, name: 'لاتيه الكراميل', enName: 'Caramel Latte', price: 25, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/latte-1052297_1280.jpg', description: 'حلو ولذيذ' },
    { id: 55, name: 'قهوة الفانيليا', enName: 'Vanilla Coffee', price: 23, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/espresso-1052296_1280.jpg', description: 'عطرية وحلوة' },
    { id: 56, name: 'أيس لاتيه', enName: 'Iced Latte', price: 24, category: 'coffee', emoji: '🧊', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/latte-1052297_1280.jpg', description: 'بارد ومنعش' },
    { id: 57, name: 'أيس موكا', enName: 'Iced Mocha', price: 27, category: 'coffee', emoji: '🧊', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/mocha-1052299_1280.jpg', description: 'قهوة باردة' },
    { id: 58, name: 'أيس كابتشينو', enName: 'Iced Cappuccino', price: 26, category: 'coffee', emoji: '🧊', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/cappuccino-1052298_1280.jpg', description: 'رائع وبارد' },
    { id: 59, name: 'ماتشا كوفي', enName: 'Matcha Latte', price: 28, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/latte-1052297_1280.jpg', description: 'مزيج متميز' },
    { id: 60, name: 'قهوة الفستق', enName: 'Pistachio Coffee', price: 25, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/espresso-1052296_1280.jpg', description: 'نكهة فريدة' },
    { id: 61, name: 'أفوجاتو بالآيس', enName: 'Affogato', price: 28, category: 'coffee', emoji: '🍦', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/latte-1052297_1280.jpg', description: 'قهوة بآيسكريم' },
    { id: 62, name: 'لاتيه الهيل', enName: 'Cardamom Latte', price: 24, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/latte-1052297_1280.jpg', description: 'عطري جداً' },
    { id: 63, name: 'قهوة سادة', enName: 'Black Coffee', price: 16, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/espresso-1052296_1280.jpg', description: 'بسيطة وقوية' },
    { id: 64, name: 'كابتشينو بالعسل', enName: 'Honey Cappuccino', price: 25, category: 'coffee', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/cappuccino-1052298_1280.jpg', description: 'حلو وفاخر' },

    // ========== HOT DRINKS (18) 🍵 ==========
    { id: 65, name: 'شاي أسود', enName: 'Black Tea', price: 16, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/black-tea-1851102_1280.jpg', description: 'شاي طازة' },
    { id: 66, name: 'شاي أخضر', enName: 'Green Tea', price: 18, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/green-tea-1851103_1280.jpg', description: 'صحي ومنعش' },
    { id: 67, name: 'شاي بالنعناع', enName: 'Mint Tea', price: 17, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/mint-tea-1851104_1280.jpg', description: 'منعش وهادي' },
    { id: 68, name: 'شاي زنجبيل وعسل', enName: 'Ginger Tea', price: 19, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/ginger-tea-1851105_1280.jpg', description: 'دافئ وصحي' },
    { id: 69, name: 'شاي ليمون وعسل', enName: 'Lemon Honey Tea', price: 18, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/lemon-tea-1851106_1280.jpg', description: 'مهدئ ولذيذ' },
    { id: 70, name: 'شاي الزهور', enName: 'Flower Tea', price: 20, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/flower-tea-1851107_1280.jpg', description: 'عطري وجميل' },
    { id: 71, name: 'شاي البابونج', enName: 'Chamomile', price: 17, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/chamomile-tea-1851108_1280.jpg', description: 'مهدئ للأعصاب' },
    { id: 72, name: 'شاي كركم وعسل', enName: 'Turmeric Tea', price: 22, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/turmeric-tea-1851109_1280.jpg', description: 'مضاد التهاب' },
    { id: 73, name: 'شاي الورد', enName: 'Rosehip Tea', price: 19, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/rosehip-tea-1851110_1280.jpg', description: 'غني بفيتامين ج' },
    { id: 74, name: 'شاي الرمان', enName: 'Pomegranate Tea', price: 21, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/pomegranate-tea-1851111_1280.jpg', description: 'فاخر وصحي' },
    { id: 75, name: 'كوكو ساخن', enName: 'Hot Chocolate', price: 24, category: 'hot', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2017/01/11/10/46/hot-chocolate-1971124_1280.jpg', description: 'دافئ وحلو' },
    { id: 76, name: 'كوكو بالقرفة', enName: 'Cinnamon Cocoa', price: 26, category: 'hot', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2017/01/11/10/46/hot-chocolate-1971124_1280.jpg', description: 'عطري وفاخر' },
    { id: 77, name: 'شاي بالقرفة', enName: 'Cinnamon Tea', price: 18, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/cinnamon-tea-1851112_1280.jpg', description: 'عطري وحلو' },
    { id: 78, name: 'شاي الكركديه', enName: 'Hibiscus Tea', price: 17, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/hibiscus-tea-1851113_1280.jpg', description: 'حامض ومنعش' },
    { id: 79, name: 'شاي الجنسنج', enName: 'Ginseng Tea', price: 22, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/ginseng-tea-1851114_1280.jpg', description: 'طاقة وحيوية' },
    { id: 80, name: 'شاي اليانسون', enName: 'Anise Tea', price: 16, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/anise-tea-1851115_1280.jpg', description: 'هادئ ولذيذ' },
    { id: 81, name: 'كوكو بالعسل', enName: 'Honey Cocoa', price: 25, category: 'hot', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2017/01/11/10/46/hot-chocolate-1971124_1280.jpg', description: 'حلو جداً' },
    { id: 82, name: 'شاي اللافندر', enName: 'Lavender Tea', price: 20, category: 'hot', emoji: '🍵', image: 'https://cdn.pixabay.com/photo/2016/11/22/19/15/lavender-tea-1851116_1280.jpg', description: 'هادئ ومريح' },

    // ========== SMOOTHIES & SHAKES (15) ==========
    { id: 83, name: 'سموثي فراولة', enName: 'Strawberry Smoothie', price: 25, category: 'smoothie', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/strawberry-smoothie-2755456_1280.jpg', description: 'كريمي وحلو' },
    { id: 84, name: 'سموثي مانجو', enName: 'Mango Smoothie', price: 27, category: 'smoothie', emoji: '🥭', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/mango-smoothie-2755478_1280.jpg', description: 'سميك وشهي' },
    { id: 85, name: 'سموثي التوت', enName: 'Berry Smoothie', price: 28, category: 'smoothie', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-smoothie-2755457_1280.jpg', description: 'غني بالفيتامينات' },
    { id: 86, name: 'سموثي موز وعسل', enName: 'Banana Honey', price: 24, category: 'smoothie', emoji: '🍌', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/banana-smoothie-2755479_1280.jpg', description: 'طاقة وصحة' },
    { id: 87, name: 'سموثي أفوكادو', enName: 'Avocado Smoothie', price: 30, category: 'smoothie', emoji: '🥑', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/avocado-smoothie-2755480_1280.jpg', description: 'فاخر وكريمي' },
    { id: 88, name: 'ميلك شيك فانيليا', enName: 'Vanilla Shake', price: 26, category: 'smoothie', emoji: '🥛', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/29/milkshake-2755481_1280.jpg', description: 'كلاسيكي' },
    { id: 89, name: 'ميلك شيك شوكولاتة', enName: 'Chocolate Shake', price: 27, category: 'smoothie', emoji: '🍫', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/29/chocolate-shake-2755482_1280.jpg', description: 'حلو جداً' },
    { id: 90, name: 'سموثي الكيوي', enName: 'Kiwi Smoothie', price: 26, category: 'smoothie', emoji: '🥝', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/kiwi-smoothie-2755483_1280.jpg', description: 'أخضر وحلو' },
    { id: 91, name: 'سموثي الأناناس', enName: 'Pineapple Smoothie', price: 25, category: 'smoothie', emoji: '🍍', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/pineapple-smoothie-2755484_1280.jpg', description: 'استوائي رائع' },
    { id: 92, name: 'ميلك شيك الفراولة', enName: 'Strawberry Shake', price: 27, category: 'smoothie', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/29/strawberry-shake-2755485_1280.jpg', description: 'طازة ولذيذة' },
    { id: 93, name: 'سموثي الموز والتوت', enName: 'Banana Berry', price: 28, category: 'smoothie', emoji: '🍌', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/banana-berry-2755486_1280.jpg', description: 'كريمي وحامض' },
    { id: 94, name: 'سموثي الشوكولاتة والموز', enName: 'Choco Banana', price: 26, category: 'smoothie', emoji: '🍌', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/29/chocolate-banana-2755487_1280.jpg', description: 'فاخر وحلو' },
    { id: 95, name: 'سموثي الجوافة', enName: 'Guava Smoothie', price: 24, category: 'smoothie', emoji: '🍓', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/guava-smoothie-2755488_1280.jpg', description: 'حامض وحلو' },
    { id: 96, name: 'ميلك شيك التوت', enName: 'Berry Shake', price: 28, category: 'smoothie', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/29/berry-shake-2755489_1280.jpg', description: 'غني بالصحة' },
    { id: 97, name: 'سموثي الرمان والتفاح', enName: 'Pomegranate Apple', price: 26, category: 'smoothie', emoji: '🍎', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/pomegranate-apple-2755490_1280.jpg', description: 'حامض وحلو' },

    // ========== PREMIUM & SPECIAL (8) 👑 ==========
    { id: 98, name: 'عصير رمان فاخر', enName: 'Premium Pomegranate', price: 28, category: 'premium', emoji: '🍎', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/pomegranate-juice-2755491_1280.jpg', description: 'جودة عالية' },
    { id: 99, name: 'عصير عنب أحمر', enName: 'Red Grapes', price: 26, category: 'premium', emoji: '🍇', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/grape-juice-2755492_1280.jpg', description: 'فاخر وغني' },
    { id: 100, name: 'عصير التوت والرمان', enName: 'Premium Berry Mix', price: 30, category: 'premium', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-juice-2755457_1280.jpg', description: 'فاخر جداً' },
    { id: 101, name: 'عصير الشوكولاتة الفاخر', enName: 'Premium Chocolate', price: 28, category: 'premium', emoji: '🍫', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/29/chocolate-shake-2755482_1280.jpg', description: 'حلو وفاخر' },
    { id: 102, name: 'عصير الذهب (ذهبي)', enName: 'Golden Juice', price: 32, category: 'premium', emoji: '✨', image: 'https://cdn.pixabay.com/photo/2016/08/09/21/54/mango-juice-1581986_1280.jpg', description: 'مزيج ملكي' },
    { id: 103, name: 'قهوة الذهب المميزة', enName: 'Gold Coffee', price: 35, category: 'premium', emoji: '☕', image: 'https://cdn.pixabay.com/photo/2015/11/19/17/07/espresso-1052296_1280.jpg', description: 'قهوة فاخرة جداً' },
    { id: 104, name: 'سموثي الأكاي بيري', enName: 'Acai Berry Premium', price: 32, category: 'premium', emoji: '🫐', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/27/berry-smoothie-2755457_1280.jpg', description: 'صحي وفاخر' },
    { id: 105, name: 'عصير المكسرات والعسل', enName: 'Nuts Honey Premium', price: 35, category: 'premium', emoji: '🥜', image: 'https://cdn.pixabay.com/photo/2017/09/16/12/28/juice-2755475_1280.jpg', description: 'فاخر وغني' },
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
                <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'" loading="lazy">
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
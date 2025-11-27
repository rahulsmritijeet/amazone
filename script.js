
const API_URL = 'https://script.google.com/macros/s/AKfycbzc5TX9alB_u6LNqoa7WMnyBRNqg0QrRFWWVvHJtwOEURDyf9Nr8aVIQa3s-WZa6-vCJg/exec';


const DEMO_MODE = true;

const CURRENCY = '₹';
const CURRENCY_RATE = 83;


const SAMPLE_PRODUCTS = [
    { 
        id: 1, 
        name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones", 
        price: 29990, 
        originalPrice: 34990,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", 
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400",
            "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400"
        ],
        category: "Electronics", 
        rating: 4.8, 
        reviews: 12847,
        description: "Industry-leading noise cancellation with Auto NC Optimizer. Crystal-clear hands-free calling with 4 beamforming microphones. Up to 30 hours of battery life with quick charging.",
        features: ["Industry-leading noise cancellation", "30-hour battery life", "Touch sensor controls", "Speak-to-chat technology", "Multipoint connection"],
        badges: ["bestseller", "prime"]
    },
    { 
        id: 2, 
        name: "Apple Watch Series 9 GPS 45mm - Midnight Aluminum", 
        price: 44900, 
        originalPrice: 49900,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", 
        images: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400"
        ],
        category: "Electronics", 
        rating: 4.9, 
        reviews: 28621,
        description: "The ultimate device for a healthy life. Track your daily activity, monitor your heart rate, and stay connected with notifications.",
        features: ["Always-On Retina display", "Blood oxygen monitoring", "ECG app", "Water resistant 50m", "GPS + Cellular option"],
        badges: ["new", "prime"]
    },
    { 
        id: 3, 
        name: "Nike Air Max 270 React - Men's Running Shoes", 
        price: 12995, 
        originalPrice: 15995,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400", 
        images: [
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
            "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400",
            "https://images.unsplash.com/photo-1491553895911-0055uj?w=400"
        ],
        category: "Fashion", 
        rating: 4.5, 
        reviews: 8934,
        description: "The Nike Air Max 270 React combines a full-length React foam midsole with a Max Air 270 unit for unrivaled comfort.",
        features: ["React foam cushioning", "Max Air 270 unit", "Breathable mesh upper", "Rubber outsole", "Pull tab for easy on/off"],
        badges: ["deal", "prime"]
    },
    { 
        id: 4, 
        name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker", 
        price: 8999, 
        originalPrice: 12999,
        image: "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400", 
        images: [
            "https://images.unsplash.com/photo-1585515320310-259814833e62?w=400",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"
        ],
        category: "Home", 
        rating: 4.7, 
        reviews: 45231,
        description: "7-in-1 functionality: Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker, and Warmer.",
        features: ["7-in-1 functionality", "6 Quart capacity", "14 smart programs", "Easy to clean", "Energy efficient"],
        badges: ["bestseller", "deal"]
    },
    { 
        id: 5, 
        name: "Samsonite Urban Arc Laptop Backpack - 15.6 inch", 
        price: 4599, 
        originalPrice: 6999,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", 
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400"
        ],
        category: "Fashion", 
        rating: 4.4, 
        reviews: 3892,
        description: "Professional laptop backpack with dedicated compartment for laptops up to 15.6 inches. Water-resistant fabric and USB charging port.",
        features: ["15.6 inch laptop compartment", "USB charging port", "Water resistant", "Anti-theft pocket", "Ergonomic design"],
        badges: ["prime"]
    },
    { 
        id: 6, 
        name: "JBL Flip 6 Portable Bluetooth Speaker", 
        price: 11999, 
        originalPrice: 14999,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400", 
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
            "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=400"
        ],
        category: "Electronics", 
        rating: 4.6, 
        reviews: 15678,
        description: "Bold sound for every adventure. 12 hours of playtime, IP67 waterproof and dustproof rating.",
        features: ["JBL Original Pro Sound", "IP67 waterproof", "12 hours playtime", "PartyBoost", "Eco-friendly packaging"],
        badges: ["bestseller", "prime"]
    },
    { 
        id: 7, 
        name: "Hydro Flask Wide Mouth Stainless Steel Bottle 32oz", 
        price: 3499, 
        originalPrice: 4299,
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400", 
        images: [
            "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400"
        ],
        category: "Sports", 
        rating: 4.8, 
        reviews: 9234,
        description: "Keep drinks cold for 24 hours or hot for 12 hours with TempShield insulation.",
        features: ["TempShield insulation", "18/8 stainless steel", "BPA-free", "Wide mouth", "Lifetime warranty"],
        badges: ["prime"]
    },
    { 
        id: 8, 
        name: "Anker PowerWave 15W Wireless Charging Pad", 
        price: 2499, 
        originalPrice: 3499,
        image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400", 
        images: [
            "https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?w=400"
        ],
        category: "Electronics", 
        rating: 4.3, 
        reviews: 7823,
        description: "15W fast wireless charging for compatible phones. Case-friendly design charges through cases up to 5mm thick.",
        features: ["15W fast charging", "Case-friendly", "LED indicator", "MultiProtect safety", "Universal compatibility"],
        badges: ["deal"]
    },
    { 
        id: 9, 
        name: "Levi's Men's 511 Slim Fit Stretch Jeans", 
        price: 3999, 
        originalPrice: 5499,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", 
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400"
        ],
        category: "Fashion", 
        rating: 4.5, 
        reviews: 23456,
        description: "The 511 Slim Fit Jeans are cut slim through the hip and thigh with a slightly tapered leg.",
        features: ["Slim fit", "Stretch denim", "5-pocket styling", "Button fly", "Machine washable"],
        badges: ["bestseller"]
    },
    { 
        id: 10, 
        name: "iRobot Roomba i7+ Self-Emptying Robot Vacuum", 
        price: 49999, 
        originalPrice: 59999,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", 
        images: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400"
        ],
        category: "Home", 
        rating: 4.6, 
        reviews: 8765,
        description: "Learns your home and creates Smart Maps so you can control which rooms are cleaned and when.",
        features: ["Self-emptying base", "Smart mapping", "Alexa compatible", "3-stage cleaning", "Edge cleaning"],
        badges: ["new", "prime"]
    },
    { 
        id: 11, 
        name: "Logitech MX Keys Advanced Wireless Keyboard", 
        price: 12995, 
        originalPrice: 14995,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400", 
        images: [
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400",
            "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400"
        ],
        category: "Electronics", 
        rating: 4.7, 
        reviews: 6543,
        description: "Perfect stroke keys shaped for your fingertips. Backlit keys automatically adjust to lighting conditions.",
        features: ["Perfect stroke keys", "Smart backlighting", "USB-C rechargeable", "Multi-device pairing", "Flow cross-computer"],
        badges: ["prime"]
    },
    { 
        id: 12, 
        name: "Adidas Ultraboost 22 Women's Running Shoes", 
        price: 16999, 
        originalPrice: 19999,
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400", 
        images: [
            "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400"
        ],
        category: "Sports", 
        rating: 4.8, 
        reviews: 11234,
        description: "Experience incredible energy return with Boost cushioning. Linear Energy Push system for a smooth stride.",
        features: ["Boost midsole", "Primeknit upper", "Continental rubber outsole", "Responsive cushioning", "Sustainable materials"],
        badges: ["new", "prime"]
    },
    {
        id: 13,
        name: "Philips Air Fryer HD9270/90 Essential XL",
        price: 9999,
        originalPrice: 14999,
        image: "https://images.unsplash.com/photo-1648145766181-4d5e8e4d6e17?w=400",
        images: [
            "https://images.unsplash.com/photo-1648145766181-4d5e8e4d6e17?w=400"
        ],
        category: "Home",
        rating: 4.5,
        reviews: 7654,
        description: "Fry, bake, grill, roast, and reheat with Rapid Air technology. 90% less fat than traditional frying.",
        features: ["Rapid Air technology", "1.2kg capacity", "7 presets", "Digital display", "Dishwasher safe parts"],
        badges: ["deal", "prime"]
    },
    {
        id: 14,
        name: "Ray-Ban Aviator Classic Sunglasses",
        price: 8990,
        originalPrice: 11990,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400",
        images: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400"
        ],
        category: "Fashion",
        rating: 4.7,
        reviews: 19876,
        description: "The iconic aviator shape with premium glass lenses. 100% UV protection.",
        features: ["Glass lenses", "100% UV protection", "Metal frame", "Adjustable nose pads", "Iconic design"],
        badges: ["bestseller"]
    },
    {
        id: 15,
        name: "Fitbit Charge 5 Advanced Fitness Tracker",
        price: 14999,
        originalPrice: 17999,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400",
        images: [
            "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400"
        ],
        category: "Electronics",
        rating: 4.4,
        reviews: 8765,
        description: "Advanced health & fitness tracker with built-in GPS, stress management, and 7-day battery life.",
        features: ["Built-in GPS", "Heart rate monitoring", "Sleep tracking", "Stress management", "7-day battery"],
        badges: ["prime"]
    },
    {
        id: 16,
        name: "Canon EOS M50 Mark II Mirrorless Camera",
        price: 58990,
        originalPrice: 65990,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400",
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
        ],
        category: "Electronics",
        rating: 4.6,
        reviews: 4321,
        description: "24.1 Megapixel APS-C CMOS sensor. 4K video recording and live streaming capabilities.",
        features: ["24.1MP sensor", "4K video", "Eye Detection AF", "Vari-angle touchscreen", "WiFi & Bluetooth"],
        badges: ["new"]
    },
    {
        id: 17,
        name: "The North Face Borealis Backpack",
        price: 7999,
        originalPrice: 9999,
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400",
        images: [
            "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400"
        ],
        category: "Fashion",
        rating: 4.6,
        reviews: 5678,
        description: "Classic everyday backpack with laptop sleeve and FlexVent suspension system.",
        features: ["FlexVent suspension", "15 inch laptop sleeve", "28L capacity", "Water resistant", "Reflective details"],
        badges: ["prime"]
    },
    {
        id: 18,
        name: "Dyson V15 Detect Cordless Vacuum",
        price: 52990,
        originalPrice: 62990,
        image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400",
        images: [
            "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400"
        ],
        category: "Home",
        rating: 4.8,
        reviews: 3456,
        description: "Reveals invisible dust with laser technology. Most powerful Dyson cordless vacuum.",
        features: ["Laser dust detection", "60 min runtime", "LCD screen", "HEPA filtration", "5 cleaning modes"],
        badges: ["new", "prime"]
    },
    {
        id: 19,
        name: "Bose QuietComfort 45 Headphones",
        price: 27990,
        originalPrice: 32990,
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
        images: [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400"
        ],
        category: "Electronics",
        rating: 4.7,
        reviews: 9876,
        description: "World-class noise cancellation and acclaimed sound. 24-hour battery life.",
        features: ["Noise cancellation", "24-hour battery", "TriPort acoustic", "Aware mode", "Multi-device pairing"],
        badges: ["bestseller", "prime"]
    },
    {
        id: 20,
        name: "Under Armour Men's Tech 2.0 T-Shirt",
        price: 1999,
        originalPrice: 2999,
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400",
        images: [
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400"
        ],
        category: "Sports",
        rating: 4.4,
        reviews: 15678,
        description: "Ultra-soft, natural feel fabric. Quick-drying material wicks sweat away.",
        features: ["UA Tech fabric", "Quick-dry", "Anti-odor technology", "Loose fit", "Lightweight"],
        badges: ["deal"]
    }
];

let allProducts = [];
let filteredProducts = [];
let cart = JSON.parse(localStorage.getItem('amazoneCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('amazoneWishlist')) || [];
let currentUser = JSON.parse(localStorage.getItem('amazoneUser')) || null;
let currentSlide = 0;
let slideInterval = null;
let modalQuantity = 1;


document.addEventListener('DOMContentLoaded', function() {
    init();
    setupEventListeners();
});

async function init() {
    showLoadingSkeleton();
    
    try {
        allProducts = await fetchProducts();
        filteredProducts = [...allProducts];
        
        renderProducts(filteredProducts);
        renderDeals();
        renderCart();
        updateUserUI();
        startSlider();
        startDealTimer();
        
    } catch (error) {
        console.error('Initialization error:', error);
        showToast('Failed to load products. Using demo data.', 'warning');
        
       
        allProducts = SAMPLE_PRODUCTS;
        filteredProducts = [...allProducts];
        renderProducts(filteredProducts);
        renderDeals();
    }
}

function setupEventListeners() {

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
     
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                if (this.value.length >= 2) {
                    searchProducts();
                } else if (this.value.length === 0) {
                    filterByCategory('');
                }
            }, 300);
        });
    }
    
  
    const productModal = document.getElementById('productModal');
    if (productModal) {
        productModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProductModal();
            }
        });
    }
    
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeAuthModal();
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProductModal();
            closeAuthModal();
            const cartSidebar = document.getElementById('cartSidebar');
            if (cartSidebar && cartSidebar.classList.contains('active')) {
                toggleCart();
            }
        }
    });

    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        });
        
        heroSection.addEventListener('mouseleave', () => {
            startSlider();
        });
    }
    

    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', filterByPrice);
    }
    

    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', sortProducts);
    }
}


async function fetchProducts() {
   
    if (DEMO_MODE) {
        await simulateDelay(800);
        return SAMPLE_PRODUCTS;
    }
    
    try {
        const response = await fetch(`${API_URL}?action=getProducts`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.success) {
            console.log(`Loaded ${data.products.length} products from Google Sheets`);
            return data.products;
        } else {
            throw new Error(data.error || 'Failed to fetch products');
        }
        
    } catch (error) {
        console.warn('API fetch failed, using demo data:', error.message);
        return SAMPLE_PRODUCTS;
    }
}

async function fetchProductById(id) {
    if (DEMO_MODE) {
        return allProducts.find(p => p.id === parseInt(id)) || null;
    }
    
    try {
        const response = await fetch(`${API_URL}?action=getProduct&id=${id}`);
        const data = await response.json();
        
        if (data.success) {
            return data.product;
        }
        return null;
    } catch (error) {
        console.error('Error fetching product:', error);
        return allProducts.find(p => p.id === parseInt(id)) || null;
    }
}

async function searchProductsAPI(query, category = '') {
    if (DEMO_MODE) {
        return filterProductsLocally(query, category);
    }
    
    try {
        let url = `${API_URL}?action=searchProducts`;
        if (query) url += `&query=${encodeURIComponent(query)}`;
        if (category) url += `&category=${encodeURIComponent(category)}`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.success) {
            return data.products;
        }
        return filterProductsLocally(query, category);
    } catch (error) {
        console.error('Search API error:', error);
        return filterProductsLocally(query, category);
    }
}

function filterProductsLocally(query, category) {
    return allProducts.filter(product => {
        const matchesQuery = !query || 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description?.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase());
        
        const matchesCategory = !category || product.category === category;
        
        return matchesQuery && matchesCategory;
    });
}

async function registerUserAPI(userData) {
    if (DEMO_MODE) {
        return registerUserLocal(userData);
    }
    
    try {
        const response = await fetch(`${API_URL}?action=registerUser`, {
            method: 'POST',
            body: JSON.stringify(userData)
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Registration API error:', error);
        return registerUserLocal(userData);
    }
}

function registerUserLocal(userData) {
    const users = JSON.parse(localStorage.getItem('amazoneUsers')) || [];
    

    if (users.find(u => u.email === userData.email)) {
        return { success: false, error: 'Email already registered' };
    }
    
    const newUser = {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        phone: userData.phone || '',
        address: userData.address || '',
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('amazoneUsers', JSON.stringify(users));
    
    return {
        success: true,
        user: {
            email: newUser.email,
            name: newUser.name,
            phone: newUser.phone
        },
        message: 'Registration successful'
    };
}

async function loginUserAPI(credentials) {
    if (DEMO_MODE) {
        return loginUserLocal(credentials);
    }
    
    try {
        const response = await fetch(`${API_URL}?action=loginUser`, {
            method: 'POST',
            body: JSON.stringify(credentials)
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Login API error:', error);
        return loginUserLocal(credentials);
    }
}

function loginUserLocal(credentials) {
    const users = JSON.parse(localStorage.getItem('amazoneUsers')) || [];
    
    const user = users.find(u => 
        u.email === credentials.email && 
        u.password === credentials.password
    );
    
    if (user) {
        return {
            success: true,
            user: {
                email: user.email,
                name: user.name,
                phone: user.phone,
                address: user.address
            },
            message: 'Login successful'
        };
    }
 
    const newUser = {
        email: credentials.email,
        password: credentials.password,
        name: credentials.email.split('@')[0],
        phone: '',
        address: ''
    };
    
    users.push(newUser);
    localStorage.setItem('amazoneUsers', JSON.stringify(users));
    
    return {
        success: true,
        user: {
            email: newUser.email,
            name: newUser.name,
            phone: newUser.phone
        },
        message: 'Account created and logged in'
    };
}

async function createOrderAPI(orderData) {
    if (DEMO_MODE) {
        return createOrderLocal(orderData);
    }
    
    try {
        const response = await fetch(`${API_URL}?action=createOrder`, {
            method: 'POST',
            body: JSON.stringify(orderData)
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Order API error:', error);
        return createOrderLocal(orderData);
    }
}

function createOrderLocal(orderData) {
    const orders = JSON.parse(localStorage.getItem('amazoneOrders')) || [];
    
    const orderId = 'ORD' + Date.now();
    
    const newOrder = {
        orderId: orderId,
        ...orderData,
        status: 'Processing',
        createdAt: new Date().toISOString()
    };
    
    orders.push(newOrder);
    localStorage.setItem('amazoneOrders', JSON.stringify(orders));
    
    return {
        success: true,
        orderId: orderId,
        message: 'Order placed successfully'
    };
}

async function getOrdersAPI(email) {
    if (DEMO_MODE) {
        return getOrdersLocal(email);
    }
    
    try {
        const response = await fetch(`${API_URL}?action=getOrders&email=${encodeURIComponent(email)}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Get orders API error:', error);
        return getOrdersLocal(email);
    }
}

function getOrdersLocal(email) {
    const orders = JSON.parse(localStorage.getItem('amazoneOrders')) || [];
    const userOrders = orders.filter(o => o.email === email);
    
    return {
        success: true,
        orders: userOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    };
}

function showLoadingSkeleton() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    grid.innerHTML = Array(8).fill().map(() => `
        <div class="product-card skeleton">
            <div class="product-image-container" style="height: 250px; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: skeleton-loading 1.5s infinite;"></div>
            <div class="product-info">
                <div style="height: 16px; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: skeleton-loading 1.5s infinite; margin-bottom: 10px; border-radius: 4px;"></div>
                <div style="height: 16px; width: 60%; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: skeleton-loading 1.5s infinite; margin-bottom: 10px; border-radius: 4px;"></div>
                <div style="height: 24px; width: 40%; background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: skeleton-loading 1.5s infinite; border-radius: 4px;"></div>
            </div>
        </div>
    `).join('');
}

function renderProducts(products) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;
    
    if (!products || products.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 80px 20px;">
                <i class="fas fa-search" style="font-size: 60px; color: #ddd; margin-bottom: 20px; display: block;"></i>
                <h3 style="font-size: 24px; margin-bottom: 10px; color: #333;">No products found</h3>
                <p style="color: #666; margin-bottom: 20px;">Try adjusting your filters or search terms</p>
                <button onclick="filterByCategory('')" style="padding: 12px 30px; background: var(--primary); color: var(--secondary); border: none; border-radius: 50px; cursor: pointer; font-weight: 600; font-size: 14px;">
                    Clear Filters
                </button>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = products.map(product => {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        const isWishlisted = wishlist.includes(product.id);
        
        return `
            <div class="product-card" data-id="${product.id}">
                <button class="product-wishlist ${isWishlisted ? 'active' : ''}" 
                        onclick="event.stopPropagation(); toggleWishlist(${product.id})"
                        aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}">
                    <i class="${isWishlisted ? 'fas' : 'far'} fa-heart"></i>
                </button>
                
                <div class="product-badges">
                    ${product.badges?.includes('bestseller') ? '<span class="product-badge badge-bestseller"><i class="fas fa-award"></i> Best Seller</span>' : ''}
                    ${product.badges?.includes('deal') ? `<span class="product-badge badge-deal"><i class="fas fa-bolt"></i> ${discount}% OFF</span>` : ''}
                    ${product.badges?.includes('new') ? '<span class="product-badge badge-new"><i class="fas fa-sparkles"></i> New</span>' : ''}
                </div>
                
                <div class="product-image-container" onclick="showProductModal(${product.id})">
                    <img src="${product.image}" 
                         alt="${product.name}" 
                         class="product-image" 
                         loading="lazy"
                         onerror="this.src='https://via.placeholder.com/300x300?text=No+Image'">
                    
                    <div class="product-quick-actions">
                        <button class="quick-action-btn quick-add-btn" onclick="event.stopPropagation(); addToCart(${product.id})">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="quick-action-btn quick-view-btn" onclick="event.stopPropagation(); showProductModal(${product.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </div>
                
                <div class="product-info" onclick="showProductModal(${product.id})">
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title">${product.name}</h3>
                    
                    <div class="product-rating">
                        <div class="stars">
                            ${renderStars(product.rating)}
                        </div>
                        <span class="rating-count">${formatNumber(product.reviews)}</span>
                    </div>
                    
                    <div class="product-price-container">
                        <div class="product-price">
                            <span class="product-price-symbol">${CURRENCY}</span>${formatNumber(product.price)}
                        </div>
                        <span class="product-original-price">${CURRENCY}${formatNumber(product.originalPrice)}</span>
                        <span class="product-discount">${discount}% off</span>
                    </div>
                    
                    <div class="prime-delivery">
                        ${product.badges?.includes('prime') ? '<img src="https://m.media-amazon.com/images/G/31/prime/logo/Prime_logo_RGB_blue._CB617654498_.png" alt="Prime" class="prime-logo">' : ''}
                    </div>
                    
                    <p class="delivery-info">
                        <i class="fas fa-truck" style="color: var(--success); margin-right: 5px;"></i>
                        FREE Delivery <strong>Tomorrow</strong>
                    </p>
                </div>
            </div>
        `;
    }).join('');
}

function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star active"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt active"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

function renderDeals() {
    const dealsContainer = document.getElementById('dealsScroll');
    if (!dealsContainer) return;

    const dealProducts = allProducts
        .filter(p => p.badges?.includes('deal') || Math.random() > 0.5)
        .slice(0, 10);
    
    if (dealProducts.length === 0) {
        dealsContainer.innerHTML = '<p style="color: white; padding: 20px;">No deals available right now.</p>';
        return;
    }
    
    dealsContainer.innerHTML = dealProducts.map(product => {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        
        return `
            <div class="deal-card" onclick="showProductModal(${product.id})">
                <span class="deal-badge">${discount}% OFF</span>
                <img src="${product.image}" 
                     alt="${product.name}" 
                     class="deal-image"
                     loading="lazy"
                     onerror="this.src='https://via.placeholder.com/200x150?text=No+Image'">
                <div class="deal-discount">${CURRENCY}${formatNumber(product.price)}</div>
                <div class="deal-original">M.R.P: ${CURRENCY}${formatNumber(product.originalPrice)}</div>
            </div>
        `;
    }).join('');
}



function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartSubtotal = document.getElementById('cartSubtotal');
    const cartTax = document.getElementById('cartTax');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;
    
 
    if (cartCount) cartCount.textContent = totalItems;
    if (cartItemCount) cartItemCount.textContent = totalItems;
    if (cartSubtotal) cartSubtotal.textContent = `${CURRENCY}${formatNumber(subtotal)}`;
    if (cartTax) cartTax.textContent = `${CURRENCY}${formatNumber(tax)}`;
    if (cartTotal) cartTotal.textContent = `${CURRENCY}${formatNumber(total)}`;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h3>Your cart is empty</h3>
                <p>Add items to get started</p>
                <button class="empty-cart-btn" onclick="toggleCart()">
                    Continue Shopping
                </button>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.image}" 
                 alt="${item.name}" 
                 class="cart-item-image"
                 onerror="this.src='https://via.placeholder.com/80x80?text=No+Image'">
            
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <p class="cart-item-price">${CURRENCY}${formatNumber(item.price)}</p>
                
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, -1)" aria-label="Decrease quantity">−</button>
                    <span class="qty-value">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateCartQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                </div>
            </div>
            
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
}

function addToCart(productId, quantity = 1) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) {
        showToast('Product not found', 'error');
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }
    
    saveCart();
    renderCart();

    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.style.animation = 'none';
        cartCount.offsetHeight; 
        cartCount.style.animation = 'pulse 0.3s ease';
    }
    
    showToast(`${product.name.substring(0, 30)}... added to cart!`, 'success');
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    saveCart();
    renderCart();
}

function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    
    saveCart();
    renderCart();
    
    if (item) {
        showToast('Item removed from cart', 'info');
    }
}

function saveCart() {
    localStorage.setItem('amazoneCart', JSON.stringify(cart));
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    
    if (!sidebar || !overlay) return;
    
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

async function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'warning');
        return;
    }
    
    if (!currentUser) {
        showToast('Please sign in to checkout', 'warning');
        toggleCart();
        openAuthModal();
        return;
    }
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;
    
    const orderData = {
        email: currentUser.email,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        subtotal: subtotal,
        tax: tax,
        total: total,
        address: currentUser.address || 'Default Address'
    };
    
  
    const checkoutBtn = document.querySelector('.checkout-btn');
    const originalText = checkoutBtn?.innerHTML;
    if (checkoutBtn) {
        checkoutBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        checkoutBtn.disabled = true;
    }
    
    try {
        const result = await createOrderAPI(orderData);
        
        if (result.success) {
            showToast(`Order ${result.orderId} placed successfully!`, 'success');

            cart = [];
            saveCart();
            renderCart();
            toggleCart();
    
            showOrderConfirmation(result.orderId, total);
            
        } else {
            showToast(result.error || 'Order failed. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Checkout error:', error);
        showToast('Order failed. Please try again.', 'error');
    } finally {
        if (checkoutBtn) {
            checkoutBtn.innerHTML = originalText || '<i class="fas fa-lock"></i> Proceed to Checkout';
            checkoutBtn.disabled = false;
        }
    }
}

function showOrderConfirmation(orderId, total) {

    console.log(`Order confirmed: ${orderId}, Total: ${CURRENCY}${formatNumber(total)}`);
}



function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from wishlist', 'info');
    } else {
        wishlist.push(productId);
        showToast('Added to wishlist ❤️', 'success');
    }
    
    localStorage.setItem('amazoneWishlist', JSON.stringify(wishlist));
    renderProducts(filteredProducts);
}



function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('searchCategory');
    
    const searchTerm = searchInput?.value?.toLowerCase() || '';
    const category = categorySelect?.value || '';
    
    filteredProducts = filterProductsLocally(searchTerm, category);
    
    updateSectionTitle(searchTerm ? `Results for "${searchTerm}"` : 'All Products');
    renderProducts(filteredProducts);
    scrollToProducts();
}

function filterByCategory(category) {
    const searchInput = document.getElementById('searchInput');
    const categorySelect = document.getElementById('searchCategory');
    const categoryFilter = document.getElementById('categoryFilter');
    

    if (searchInput) searchInput.value = '';
    if (categorySelect) categorySelect.value = category;
    if (categoryFilter) categoryFilter.value = category;
    
    if (!category) {
        filteredProducts = [...allProducts];
        updateSectionTitle('All Products');
    } else {
        filteredProducts = allProducts.filter(p => p.category === category);
        updateSectionTitle(category);
    }
    

    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.category === category);
    });
    
    renderProducts(filteredProducts);
    scrollToProducts();
}

function selectChip(element, category) {
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
    });
    element.classList.add('active');
    filterByCategory(category);
}

function filterByPrice() {
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    
    if (!priceRange) return;
    
    const maxPrice = parseInt(priceRange.value);
    if (priceValue) priceValue.textContent = formatNumber(maxPrice);
    
    filteredProducts = allProducts.filter(p => p.price <= maxPrice);
    renderProducts(filteredProducts);
}

function sortProducts() {
    const sortSelect = document.getElementById('sortSelect');
    if (!sortSelect) return;
    
    const sortBy = sortSelect.value;
    
    switch (sortBy) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        case 'newest':
            filteredProducts.sort((a, b) => b.id - a.id);
            break;
        case 'reviews':
            filteredProducts.sort((a, b) => b.reviews - a.reviews);
            break;
        default:
         
            filteredProducts = [...allProducts].filter(p => 
                filteredProducts.some(fp => fp.id === p.id)
            );
    }
    
    renderProducts(filteredProducts);
}

function updateSectionTitle(title) {
    const sectionTitle = document.getElementById('sectionTitle');
    if (sectionTitle) {
        sectionTitle.textContent = title;
    }
}

function scrollToProducts() {
    const sectionTitle = document.getElementById('sectionTitle');
    if (sectionTitle) {
        sectionTitle.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    }
}



function showProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) {
        showToast('Product not found', 'error');
        return;
    }
    
    modalQuantity = 1;
    
    const modal = document.getElementById('productModal');
    const mainImage = document.getElementById('modalMainImage');
    const thumbnails = document.getElementById('modalThumbnails');
    const productInfo = document.getElementById('modalProductInfo');
    
    if (!modal || !mainImage || !productInfo) return;
    
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);
    const isWishlisted = wishlist.includes(product.id);
    

    mainImage.src = product.image;
    mainImage.alt = product.name;
    
 
    if (thumbnails) {
        const images = product.images || [product.image];
        thumbnails.innerHTML = images.map((img, index) => `
            <div class="product-thumbnail ${index === 0 ? 'active' : ''}" 
                 onclick="changeModalImage('${img}', this)">
                <img src="${img}" alt="${product.name} - Image ${index + 1}" loading="lazy">
            </div>
        `).join('');
    }
    
    
    productInfo.innerHTML = `
        <div class="product-modal-category">${product.category}</div>
        <h1 class="product-modal-title">${product.name}</h1>
        
        <div class="product-modal-rating">
            <div class="stars" style="font-size: 18px;">
                ${renderStars(product.rating)}
            </div>
            <span style="color: #007185; font-weight: 600;">${product.rating}</span>
            <span style="color: var(--text-secondary);">(${formatNumber(product.reviews)} reviews)</span>
        </div>
        
        <div class="product-modal-price">
            <span class="price-current">${CURRENCY}${formatNumber(product.price)}</span>
            <span class="price-original">${CURRENCY}${formatNumber(product.originalPrice)}</span>
            <span class="price-discount">${discount}% OFF</span>
        </div>
        
        <p class="product-modal-description">
            ${product.description || 'Experience premium quality with this exceptional product. Designed for performance and durability.'}
        </p>
        
        <div class="product-modal-features">
            <h4><i class="fas fa-check-circle" style="color: var(--success); margin-right: 8px;"></i>Key Features</h4>
            <ul class="feature-list">
                ${(product.features || ['High quality materials', 'Fast delivery', '30-day return policy', 'Genuine product']).map(f => `
                    <li><i class="fas fa-check"></i>${f}</li>
                `).join('')}
            </ul>
        </div>
        
        <div class="product-modal-stock">
            <i class="fas fa-check-circle"></i> In Stock
        </div>
        
        <div class="quantity-selector">
            <label>Quantity:</label>
            <div class="quantity-controls">
                <button onclick="changeModalQuantity(-1)" aria-label="Decrease quantity">−</button>
                <span id="modalQtyValue">1</span>
                <button onclick="changeModalQuantity(1)" aria-label="Increase quantity">+</button>
            </div>
        </div>
        
        <div class="product-modal-actions">
            <button class="modal-add-btn" onclick="addToCartFromModal(${product.id})">
                <i class="fas fa-shopping-cart"></i> Add to Cart
            </button>
            <button class="modal-buy-btn" onclick="buyNow(${product.id})">
                <i class="fas fa-bolt"></i> Buy Now
            </button>
        </div>
        
        <div style="margin-top: 25px; padding: 20px; background: var(--bg-light); border-radius: var(--radius-md);">
            <p style="font-size: 14px; display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <i class="fas fa-truck" style="color: var(--success); width: 20px;"></i>
                <span><strong>FREE Delivery</strong> Tomorrow, if ordered within 12 hours</span>
            </p>
            <p style="font-size: 14px; display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <i class="fas fa-undo" style="color: var(--primary); width: 20px;"></i>
                <span><strong>10 Days</strong> Easy Return Policy</span>
            </p>
            <p style="font-size: 14px; display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                <i class="fas fa-shield-alt" style="color: #007185; width: 20px;"></i>
                <span><strong>1 Year</strong> Manufacturer Warranty</span>
            </p>
            <p style="font-size: 14px; display: flex; align-items: center; gap: 12px;">
                <i class="fas fa-credit-card" style="color: var(--secondary); width: 20px;"></i>
                <span><strong>Pay on Delivery</strong> available</span>
            </p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function changeModalImage(src, element) {
    const mainImage = document.getElementById('modalMainImage');
    if (mainImage) {
        mainImage.src = src;
    }
    
    document.querySelectorAll('.product-thumbnail').forEach(t => {
        t.classList.remove('active');
    });
    if (element) {
        element.classList.add('active');
    }
}

function changeModalQuantity(change) {
    modalQuantity = Math.max(1, Math.min(10, modalQuantity + change));
    
    const qtyValue = document.getElementById('modalQtyValue');
    if (qtyValue) {
        qtyValue.textContent = modalQuantity;
    }
}

function addToCartFromModal(productId) {
    addToCart(productId, modalQuantity);
    closeProductModal();
}

function buyNow(productId) {
    addToCart(productId, modalQuantity);
    closeProductModal();
    toggleCart();
}


function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        clearAuthForms();
    }
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => {
        t.classList.remove('active');
    });
    document.querySelectorAll('.auth-form').forEach(f => {
        f.classList.remove('active');
    });
    
    if (tab === 'signin') {
        document.querySelector('.auth-tab:first-child')?.classList.add('active');
        document.getElementById('signinForm')?.classList.add('active');
    } else {
        document.querySelector('.auth-tab:last-child')?.classList.add('active');
        document.getElementById('signupForm')?.classList.add('active');
    }
}

function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    
    const button = input.parentElement?.querySelector('.password-toggle');
    const icon = button?.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon?.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon?.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

async function handleSignIn(event) {
    event.preventDefault();
    
    const email = document.getElementById('signinEmail')?.value;
    const password = document.getElementById('signinPassword')?.value;

    if (!email || !validateEmail(email)) {
        showFormError('signinEmailError');
        return;
    }
    
    if (!password || password.length < 6) {
        showFormError('signinPasswordError');
        return;
    }
    

    const btn = document.getElementById('signinBtn');
    const originalText = btn?.innerHTML;
    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
        btn.disabled = true;
    }
    
    try {
        const result = await loginUserAPI({ email, password });
        
        if (result.success) {
            currentUser = result.user;
            localStorage.setItem('amazoneUser', JSON.stringify(currentUser));
            updateUserUI();
            closeAuthModal();
            showToast(`Welcome back, ${result.user.name}! 👋`, 'success');
        } else {
            showToast(result.error || 'Login failed', 'error');
        }
    } catch (error) {
        console.error('Sign in error:', error);
        showToast('Login failed. Please try again.', 'error');
    } finally {
        if (btn) {
            btn.innerHTML = originalText || '<span>Sign In</span>';
            btn.disabled = false;
        }
    }
}

async function handleSignUp(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName')?.value;
    const email = document.getElementById('signupEmail')?.value;
    const phone = document.getElementById('signupPhone')?.value;
    const password = document.getElementById('signupPassword')?.value;
    const confirmPassword = document.getElementById('signupConfirmPassword')?.value;
    

    if (!name || name.length < 2) {
        showFormError('signupNameError');
        return;
    }
    
    if (!email || !validateEmail(email)) {
        showFormError('signupEmailError');
        return;
    }
    
    if (!phone || phone.length < 10) {
        showFormError('signupPhoneError');
        return;
    }
    
    if (!password || password.length < 8) {
        showFormError('signupPasswordError');
        return;
    }
    
    if (password !== confirmPassword) {
        showFormError('signupConfirmPasswordError');
        return;
    }

    const btn = document.getElementById('signupBtn');
    const originalText = btn?.innerHTML;
    if (btn) {
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating account...';
        btn.disabled = true;
    }
    
    try {
        const result = await registerUserAPI({ name, email, phone, password });
        
        if (result.success) {
            currentUser = result.user;
            localStorage.setItem('amazoneUser', JSON.stringify(currentUser));
            updateUserUI();
            closeAuthModal();
            showToast(`Welcome to Amazone, ${name}! 🎉`, 'success');
        } else {
            showToast(result.error || 'Registration failed', 'error');
        }
    } catch (error) {
        console.error('Sign up error:', error);
        showToast('Registration failed. Please try again.', 'error');
    } finally {
        if (btn) {
            btn.innerHTML = originalText || '<span>Create Account</span>';
            btn.disabled = false;
        }
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('amazoneUser');
    updateUserUI();
    showToast('You have been signed out', 'info');
}

function updateUserUI() {
    const greeting = document.getElementById('userGreeting');
    const dropdown = document.getElementById('userDropdown');
    const accountBtn = document.getElementById('accountBtn');
    
    if (currentUser) {
        if (greeting) greeting.textContent = currentUser.name.split(' ')[0];
        
        if (dropdown) {
            dropdown.style.display = 'block';
            
            const avatar = document.getElementById('dropdownAvatar');
            const name = document.getElementById('dropdownName');
            const email = document.getElementById('dropdownEmail');
            
            if (avatar) avatar.textContent = currentUser.name.charAt(0).toUpperCase();
            if (name) name.textContent = currentUser.name;
            if (email) email.textContent = currentUser.email;
        }
        
        if (accountBtn) accountBtn.onclick = null;
    } else {
        if (greeting) greeting.textContent = 'Sign in';
        if (dropdown) dropdown.style.display = 'none';
        if (accountBtn) accountBtn.onclick = openAuthModal;
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showFormError(errorId) {
    const error = document.getElementById(errorId);
    if (error) {
        error.classList.add('show');
        setTimeout(() => {
            error.classList.remove('show');
        }, 3000);
    }
}

function clearAuthForms() {
    document.querySelectorAll('.auth-form input').forEach(input => {
        input.value = '';
    });
    document.querySelectorAll('.form-error').forEach(error => {
        error.classList.remove('show');
    });
}

function socialLogin(provider) {
    showToast(`${provider} login coming soon!`, 'info');
}



function startSlider() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, 5000);
}

function goToSlide(index) {
    currentSlide = index;
    updateSlider();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % 3;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + 3) % 3;
    updateSlider();
}

function updateSlider() {
    const slider = document.getElementById('heroSlider');
    const dots = document.querySelectorAll('.hero-dot');
    
    if (slider) {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
    

    if (slideInterval) {
        clearInterval(slideInterval);
    }
    startSlider();
}



function startDealTimer() {
    let hours = 12;
    let minutes = 45;
    let seconds = 30;
    
    const timerInterval = setInterval(() => {
        seconds--;
        
        if (seconds < 0) {
            seconds = 59;
            minutes--;
        }
        
        if (minutes < 0) {
            minutes = 59;
            hours--;
        }
        
        if (hours < 0) {
            hours = 23;
            minutes = 59;
            seconds = 59;
        }
        
        const hoursEl = document.getElementById('timerHours');
        const minutesEl = document.getElementById('timerMinutes');
        const secondsEl = document.getElementById('timerSeconds');
        
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
        
    }, 1000);
}


function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fa-check',
        error: 'fa-times',
        warning: 'fa-exclamation',
        info: 'fa-info'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="fas ${icons[type] || icons.info}"></i>
        </div>
        <span class="toast-message">${message}</span>
        <button class="toast-close" onclick="this.parentElement.remove()" aria-label="Close">×</button>
    `;
    
    container.appendChild(toast);

    setTimeout(() => {
        if (toast.parentElement) {
            toast.style.animation = 'toastSlideIn 0.4s ease reverse';
            setTimeout(() => {
                toast.remove();
            }, 400);
        }
    }, 4000);
}



function formatNumber(num) {
    if (num === undefined || num === null) return '0';
    return num.toLocaleString('en-IN');
}

function simulateDelay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}


window.searchProducts = searchProducts;
window.filterByCategory = filterByCategory;
window.selectChip = selectChip;
window.filterByPrice = filterByPrice;
window.sortProducts = sortProducts;
window.showProductModal = showProductModal;
window.closeProductModal = closeProductModal;
window.changeModalImage = changeModalImage;
window.changeModalQuantity = changeModalQuantity;
window.addToCart = addToCart;
window.addToCartFromModal = addToCartFromModal;
window.buyNow = buyNow;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart = removeFromCart;
window.toggleCart = toggleCart;
window.checkout = checkout;
window.toggleWishlist = toggleWishlist;
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.switchAuthTab = switchAuthTab;
window.togglePassword = togglePassword;
window.handleSignIn = handleSignIn;
window.handleSignUp = handleSignUp;
window.logout = logout;
window.socialLogin = socialLogin;
window.goToSlide = goToSlide;
window.nextSlide = nextSlide;
window.prevSlide = prevSlide;
window.showToast = showToast;

console.log('%c🛒 Amazone Clone Loaded!', 'color: #ff9900; font-size: 20px; font-weight: bold;');
console.log('%cDemo Mode:', 'color: #666;', DEMO_MODE ? 'Enabled' : 'Disabled');
console.log('%cTo use Google Sheets backend:', 'color: #666;');
console.log('%c1. Set DEMO_MODE = false', 'color: #007185;');
console.log('%c2. Replace API_URL with your Apps Script URL', 'color: #007185;');

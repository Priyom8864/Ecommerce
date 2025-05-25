// JavaScript code for the e-commerce website

// Sample product data
const products = [
    {
        name: "Wireless Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
        description: "High-quality wireless headphones with noise cancellation."
    },
    {
        name: "Smart Watch",
        price: 2999,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
        description: "Track your fitness and notifications with this stylish smart watch."
    },
    {
        name: "Bluetooth Speaker",
        price: 1499,
        image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
        description: "Portable Bluetooth speaker with deep bass and long battery life."
    },
    {
        name: "DSLR Camera",
        price: 24999,
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
        description: "Capture stunning photos with this professional DSLR camera."
    }
];

// Render products
const productList = document.querySelector('.product-list');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="price">₹${product.price}</div>
        <button>Add to Cart</button>
    `;
    productList.appendChild(card);
});

// Cart functionality
let cart = [];

function addToCart(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity++;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }
    updateCartCount();
}

// Update cart count display
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Function to filter products based on search input
function filterProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) || 
        product.description.toLowerCase().includes(searchInput)
    );
    displayProducts(filteredProducts);
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', filterProducts);

// Contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('contact-success').style.display = 'block';
        contactForm.reset();
    });
}
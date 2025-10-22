// app.js - Main application file for Khadija Parfum
// Global variables and main functions

// Product data
const products = [
    {
        id: 1,
        name: "Rose Mystique",
        brand: "Khadija Collection",
        category: "femme",
        price: 25000,
        description: "Une fragrance florale délicate aux notes de rose et jasmin",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        features: [
            "Concentration: Eau de Parfum",
            "Durée: 6-8 heures",
            "Volume: 50ml",
            "Origine: France",
            "Type: Florale",
            "Occasion: Tous les jours"
        ],
        notes: {
            top: ["Rose de Damas", "Bergamote", "Pamplemousse"],
            heart: ["Jasmin Sambac", "Rose Centifolia", "Muguet"],
            base: ["Musc Blanc", "Bois de Santal", "Ambre Gris"]
        }
    },
    {
        id: 2,
        name: "Bois Royal",
        brand: "Khadija Collection",
        category: "homme",
        price: 30000,
        description: "Un parfum boisé intense aux notes de santal et musc",
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        features: [
            "Concentration: Eau de Parfum",
            "Durée: 8-10 heures",
            "Volume: 50ml",
            "Origine: France",
            "Type: Boisé",
            "Occasion: Professionnel"
        ],
        notes: {
            top: ["Poivre Noir", "Bergamote", "Cardamome"],
            heart: ["Bois de Santal", "Cèdre", "Vétiver"],
            base: ["Musc", "Ambre", "Cuir"]
        }
    },
    {
        id: 3,
        name: "Citrus Élégance",
        brand: "Khadija Collection",
        category: "unisexe",
        price: 22000,
        description: "Une fraîcheur citronnée parfaite pour tous les moments",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        features: [
            "Concentration: Eau de Toilette",
            "Durée: 4-6 heures",
            "Volume: 50ml",
            "Origine: France",
            "Type: Citrus",
            "Occasion: Décontracté"
        ],
        notes: {
            top: ["Citron", "Orange", "Pamplemousse"],
            heart: ["Neroli", "Fleur d'Oranger", "Menthe"],
            base: ["Musc Blanc", "Bois de Cèdre", "Ambre"]
        }
    },
    {
        id: 4,
        name: "Vanille Sensuelle",
        brand: "Khadija Collection",
        category: "femme",
        price: 28000,
        description: "Une douceur vanillée enveloppante et sensuelle",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        features: [
            "Concentration: Eau de Parfum",
            "Durée: 6-8 heures",
            "Volume: 50ml",
            "Origine: France",
            "Type: Gourmand",
            "Occasion: Soirée"
        ],
        notes: {
            top: ["Vanille Bourbon", "Caramel", "Cacao"],
            heart: ["Rose", "Jasmin", "Tonka"],
            base: ["Musc", "Ambre", "Bois de Santal"]
        }
    },
    {
        id: 5,
        name: "Cuir Noble",
        brand: "Khadija Collection",
        category: "homme",
        price: 35000,
        description: "Un parfum cuiré sophistiqué aux notes épicées",
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        features: [
            "Concentration: Eau de Parfum",
            "Durée: 8-10 heures",
            "Volume: 50ml",
            "Origine: France",
            "Type: Cuiré",
            "Occasion: Élégant"
        ],
        notes: {
            top: ["Poivre", "Cardamome", "Bergamote"],
            heart: ["Cuir", "Tabac", "Rose"],
            base: ["Musc", "Ambre", "Bois de Santal"]
        }
    },
    {
        id: 6,
        name: "Ambre Précieux",
        brand: "Khadija Luxe",
        category: "luxe",
        price: 50000,
        description: "Une création d'exception aux notes d'ambre et d'encens",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        features: [
            "Concentration: Extrait de Parfum",
            "Durée: 12+ heures",
            "Volume: 30ml",
            "Origine: France",
            "Type: Oriental",
            "Occasion: Exceptionnelle"
        ],
        notes: {
            top: ["Safran", "Rose", "Bergamote"],
            heart: ["Ambre", "Encens", "Oud"],
            base: ["Musc", "Vanille", "Bois de Santal"]
        }
    },
    {
        id: 7,
        name: "Jasmin Oriental",
        brand: "Khadija Collection",
        category: "femme",
        price: 26000,
        description: "Un jasmin envoûtant aux notes orientales mystérieuses",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        features: [
            "Concentration: Eau de Parfum",
            "Durée: 6-8 heures",
            "Volume: 50ml",
            "Origine: France",
            "Type: Oriental",
            "Occasion: Mystérieuse"
        ],
        notes: {
            top: ["Jasmin", "Rose", "Bergamote"],
            heart: ["Oud", "Encens", "Rose"],
            base: ["Musc", "Ambre", "Vanille"]
        }
    },
    {
        id: 8,
        name: "Marine Fresh",
        brand: "Khadija Collection",
        category: "unisexe",
        price: 24000,
        description: "Une fraîcheur marine revitalisante et moderne",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        images: [
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        ],
        features: [
            "Concentration: Eau de Toilette",
            "Durée: 4-6 heures",
            "Volume: 50ml",
            "Origine: France",
            "Type: Aquatique",
            "Occasion: Sportif"
        ],
        notes: {
            top: ["Citron", "Menthe", "Sel Marin"],
            heart: ["Algues Marines", "Jasmin", "Rose"],
            base: ["Musc", "Bois de Cèdre", "Ambre"]
        }
    }
];

// Global state
let cart = [];
let filteredProducts = [...products];

// Utility functions
function formatPrice(price) {
    return price.toLocaleString() + ' FCFA';
}

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '⚠'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filteredProducts = products.filter(product => 
                product.name.toLowerCase().includes(searchTerm) ||
                product.brand.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.category.toLowerCase().includes(searchTerm)
            );
            
            if (typeof renderProducts === 'function') {
                renderProducts();
            }
        });
    }
}

// Category filtering
function filterByCategory(category) {
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    if (typeof renderProducts === 'function') {
        renderProducts();
    }
    
    // Scroll to products section
    const productsSection = document.getElementById('produits');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize app
function initializeApp() {
    initializeSearch();
    initializeSmoothScrolling();
    
    // Initialize cart count
    if (typeof updateCartCount === 'function') {
        updateCartCount();
    }
    
    // Initialize products if on main page
    if (typeof renderProducts === 'function') {
        renderProducts();
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        cart,
        filteredProducts,
        formatPrice,
        showNotification,
        filterByCategory,
        initializeApp
    };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);

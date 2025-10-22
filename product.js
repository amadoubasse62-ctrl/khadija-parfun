// product.js - Product management and display functions

// Render products on main page
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-brand">${product.brand}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${formatPrice(product.price)}</div>
                <div class="product-actions">
                    <button class="btn-view" onclick="viewProduct(${product.id})">Voir</button>
                    <button class="btn-add" onclick="addToCart(${product.id})">Ajouter</button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// View product details
function viewProduct(productId) {
    // Redirect to product detail page
    window.location.href = `product.html?id=${productId}`;
}

// Product detail page functions
function initializeProductPage() {
    // Get product ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        showNotification('Produit non trouvé', 'error');
        return;
    }
    
    // Update page content
    updateProductPageContent(product);
    initializeProductImages(product);
    initializeProductTabs();
    initializeQuantitySelector();
}

function updateProductPageContent(product) {
    // Update hero section
    const productTitle = document.getElementById('productTitle');
    const productSubtitle = document.getElementById('productSubtitle');
    if (productTitle) productTitle.textContent = product.name;
    if (productSubtitle) productSubtitle.textContent = product.description.substring(0, 80) + "...";
    
    // Update product info
    const productName = document.getElementById('productName');
    const productBrand = document.getElementById('productBrand');
    const productPrice = document.getElementById('productPrice');
    const productDescription = document.getElementById('productDescription');
    const productCategory = document.getElementById('productCategory');
    
    if (productName) productName.textContent = product.name;
    if (productBrand) productBrand.textContent = product.brand;
    if (productPrice) productPrice.textContent = formatPrice(product.price);
    if (productDescription) productDescription.textContent = product.description;
    
    const categoryMap = {
        'femme': 'Parfum Femme',
        'homme': 'Parfum Homme',
        'unisexe': 'Parfum Unisexe',
        'luxe': 'Collection Luxe'
    };
    if (productCategory) productCategory.textContent = categoryMap[product.category] || 'Parfum';
    
    // Update features if available
    if (product.features) {
        updateProductFeatures(product.features);
    }
    
    // Update notes if available
    if (product.notes) {
        updateProductNotes(product.notes);
    }
}

function updateProductFeatures(features) {
    const featureList = document.querySelector('.feature-list');
    if (featureList && features) {
        featureList.innerHTML = features.map(feature => `<li>${feature}</li>`).join('');
    }
}

function updateProductNotes(notes) {
    // Update notes in tabs
    const notesTab = document.getElementById('notes-tab');
    if (notesTab && notes) {
        const notesGrid = notesTab.querySelector('.notes-grid');
        if (notesGrid) {
            notesGrid.innerHTML = `
                <div class="note-category">
                    <h5>Notes de Tête</h5>
                    <ul class="note-list">
                        ${notes.top.map(note => `<li>${note}</li>`).join('')}
                    </ul>
                </div>
                <div class="note-category">
                    <h5>Notes de Cœur</h5>
                    <ul class="note-list">
                        ${notes.heart.map(note => `<li>${note}</li>`).join('')}
                    </ul>
                </div>
                <div class="note-category">
                    <h5>Notes de Fond</h5>
                    <ul class="note-list">
                        ${notes.base.map(note => `<li>${note}</li>`).join('')}
                    </ul>
                </div>
            `;
        }
    }
}

function initializeProductImages(product) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage && product.images) {
        mainImage.src = product.images[0];
        
        // Update thumbnails
        const thumbnails = document.querySelectorAll('.product-thumbnail');
        thumbnails.forEach((thumb, index) => {
            if (product.images[index]) {
                thumb.src = product.images[index];
                thumb.onclick = () => changeImage(product.images[index]);
            }
        });
    }
}

function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = src;
        
        // Update active thumbnail
        document.querySelectorAll('.product-thumbnail').forEach(thumb => {
            thumb.classList.remove('active');
        });
        event.target.classList.add('active');
    }
}

function initializeQuantitySelector() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        quantityInput.addEventListener('change', function() {
            const value = parseInt(this.value);
            if (value < 1) this.value = 1;
            if (value > 10) this.value = 10;
        });
    }
}

function changeQuantity(delta) {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput) {
        const newQuantity = parseInt(quantityInput.value) + delta;
        if (newQuantity >= 1 && newQuantity <= 10) {
            quantityInput.value = newQuantity;
        }
    }
}

function addToCartFromProductPage() {
    const quantityInput = document.getElementById('quantity');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 1;
    
    // Get product ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    
    addToCart(productId, quantity);
}

// Tab functionality for product page
function initializeProductTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('onclick').match(/showTab\('(\w+)'\)/)[1];
            showTab(targetTab);
        });
    });
}

function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.style.display = 'none';
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const targetPanel = document.getElementById(tabName + '-tab');
    if (targetPanel) {
        targetPanel.style.display = 'block';
    }
    
    // Add active class to clicked button
    const clickedButton = event.target;
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

// Product filtering and search
function filterProductsByCategory(category) {
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    renderProducts();
}

function searchProducts(searchTerm) {
    const term = searchTerm.toLowerCase();
    filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    renderProducts();
}

// Initialize product functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the product detail page
    if (window.location.pathname.includes('product.html')) {
        initializeProductPage();
    }
    
    // Initialize tabs if they exist
    if (document.querySelector('.tab-btn')) {
        initializeProductTabs();
    }
});

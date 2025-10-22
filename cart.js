// cart.js - Shopping cart functionality for Khadija Parfum

// Cart management functions
function addToCart(productId, quantity = 1) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        showNotification('Produit non trouvé', 'error');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }
    
    updateCartCount();
    renderCart();
    
    // Show success feedback
    showNotification(`${product.name} ajouté au panier`, 'success');
    
    // Visual feedback on button
    const button = event?.target;
    if (button) {
        const originalText = button.textContent;
        button.textContent = 'Ajouté ✓';
        button.style.background = '#28a745';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 1500);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    renderCart();
    showNotification('Produit retiré du panier', 'success');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartCount();
            renderCart();
        }
    }
}

function clearCart() {
    cart = [];
    updateCartCount();
    renderCart();
    showNotification('Panier vidé', 'success');
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Votre panier est vide</p>';
        if (cartTotal) {
            cartTotal.textContent = 'Total: 0 FCFA';
        }
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="cart-item-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        `;
        cartItems.appendChild(cartItem);
    });

    if (cartTotal) {
        cartTotal.textContent = `Total: ${formatPrice(total)}`;
    }
}

function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) {
        showNotification('Panier disponible sur la page principale', 'error');
        return;
    }
    
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
    if (modal.style.display === 'block') {
        renderCart();
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Create checkout summary
    let summary = `Commande confirmée!\n\n`;
    summary += `Articles: ${itemCount}\n`;
    summary += `Total: ${formatPrice(total)}\n\n`;
    summary += `Merci pour votre achat chez Khadija Parfum!\n\n`;
    summary += `Vous recevrez un email de confirmation sous peu.`;
    
    alert(summary);
    
    // Clear cart and close modal
    clearCart();
    toggleCart();
    
    // Show success notification
    showNotification('Commande passée avec succès!', 'success');
}

// Cart persistence (localStorage)
function saveCartToStorage() {
    try {
        localStorage.setItem('khadija_cart', JSON.stringify(cart));
    } catch (error) {
        console.warn('Impossible de sauvegarder le panier:', error);
    }
}

function loadCartFromStorage() {
    try {
        const savedCart = localStorage.getItem('khadija_cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            updateCartCount();
        }
    } catch (error) {
        console.warn('Impossible de charger le panier:', error);
        cart = [];
    }
}

// Auto-save cart when modified
function saveCart() {
    saveCartToStorage();
}

// Initialize cart
function initializeCart() {
    loadCartFromStorage();
    updateCartCount();
    
    // Auto-save cart on changes
    const originalAddToCart = addToCart;
    addToCart = function(productId, quantity) {
        originalAddToCart(productId, quantity);
        saveCart();
    };
    
    const originalUpdateQuantity = updateQuantity;
    updateQuantity = function(productId, change) {
        originalUpdateQuantity(productId, change);
        saveCart();
    };
    
    const originalRemoveFromCart = removeFromCart;
    removeFromCart = function(productId) {
        originalRemoveFromCart(productId);
        saveCart();
    };
    
    const originalClearCart = clearCart;
    clearCart = function() {
        originalClearCart();
        saveCart();
    };
}

// Close modal when clicking outside
function initializeCartModal() {
    window.onclick = function(event) {
        const modal = document.getElementById('cartModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('cartModal');
            if (modal && modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        }
    });
}

// Initialize cart when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeCart();
    initializeCartModal();
});

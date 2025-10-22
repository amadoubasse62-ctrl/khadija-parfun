// email.js - Email notifications system for Khadija Parfum
// Using EmailJS for sending notifications

// Load configuration
let EMAILJS_CONFIG = {
    serviceId: 'service_khadija_parfum',
    templateId: {
        cart: 'template_cart_notification',
        order: 'template_order_confirmation'
    },
    userId: 'your_user_id_here',
    notificationEmail: 'amadoubasse62@gmail.com'
};

// Try to load external config
function loadEmailConfig() {
    // This will be loaded from email-config.js if available
    if (typeof EMAILJS_CONFIG_EXTERNAL !== 'undefined') {
        EMAILJS_CONFIG = EMAILJS_CONFIG_EXTERNAL;
    }
}

// Initialize EmailJS
function initializeEmailJS() {
    // Load EmailJS script if not already loaded
    if (typeof emailjs === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = function() {
            emailjs.init(EMAILJS_CONFIG.userId);
        };
        document.head.appendChild(script);
    } else {
        emailjs.init(EMAILJS_CONFIG.userId);
    }
}

// Send cart notification email
function sendCartNotificationEmail(product, quantity = 1) {
    if (typeof emailjs === 'undefined') {
        console.warn('EmailJS not loaded yet');
        return;
    }

    const templateParams = {
        to_email: EMAILJS_CONFIG.notificationEmail,
        to_name: 'Khadija Parfum',
        product_name: product.name,
        product_brand: product.brand,
        product_price: formatPrice(product.price),
        quantity: quantity,
        total_price: formatPrice(product.price * quantity),
        customer_info: 'Client anonyme',
        timestamp: new Date().toLocaleString('fr-FR'),
        site_url: window.location.origin
    };

    emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId.cart,
        templateParams
    ).then(
        function(response) {
            console.log('Email de notification panier envoyé:', response.status, response.text);
        },
        function(error) {
            console.error('Erreur envoi email panier:', error);
        }
    );
}

// Send order confirmation email
function sendOrderConfirmationEmail(orderData) {
    if (typeof emailjs === 'undefined') {
        console.warn('EmailJS not loaded yet');
        return;
    }

    // Prepare order summary
    const orderSummary = orderData.items.map(item => 
        `${item.name} (${item.brand}) - ${item.quantity}x ${formatPrice(item.price)}`
    ).join('\n');

    const templateParams = {
        to_email: EMAILJS_CONFIG.notificationEmail,
        to_name: 'Khadija Parfum',
        order_id: generateOrderId(),
        order_date: new Date().toLocaleString('fr-FR'),
        customer_name: orderData.customerName || 'Client anonyme',
        customer_email: orderData.customerEmail || 'Non fourni',
        customer_phone: orderData.customerPhone || 'Non fourni',
        order_items: orderSummary,
        total_items: orderData.totalItems,
        total_amount: formatPrice(orderData.totalAmount),
        delivery_address: orderData.deliveryAddress || 'À confirmer',
        payment_method: orderData.paymentMethod || 'À confirmer',
        site_url: window.location.origin
    };

    emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId.order,
        templateParams
    ).then(
        function(response) {
            console.log('Email de confirmation commande envoyé:', response.status, response.text);
            showNotification('Email de confirmation envoyé à amadoubasse62@gmail.com', 'success');
        },
        function(error) {
            console.error('Erreur envoi email commande:', error);
            showNotification('Erreur lors de l\'envoi de l\'email de confirmation', 'error');
        }
    );
}

// Generate unique order ID
function generateOrderId() {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    return `KP-${timestamp}-${random}`.toUpperCase();
}

// Enhanced add to cart function with email notification
function addToCartWithEmailNotification(productId, quantity = 1) {
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
    
    // Send email notification
    sendCartNotificationEmail(product, quantity);
    
    // Show success feedback
    showNotification(`${product.name} ajouté au panier - Email envoyé!`, 'success');
    
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

// Enhanced checkout function with email notification
function checkoutWithEmailNotification() {
    if (cart.length === 0) {
        showNotification('Votre panier est vide!', 'error');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    // Collect customer information
    const customerInfo = collectCustomerInfo();
    
    // Prepare order data
    const orderData = {
        items: [...cart],
        totalAmount: total,
        totalItems: totalItems,
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.phone,
        deliveryAddress: customerInfo.address,
        paymentMethod: customerInfo.paymentMethod
    };
    
    // Send email notification
    sendOrderConfirmationEmail(orderData);
    
    // Show success message
    const summary = `Commande confirmée!\n\nArticles: ${totalItems}\nTotal: ${formatPrice(total)}\n\nEmail envoyé à amadoubasse62@gmail.com\n\nMerci pour votre achat chez Khadija Parfum!`;
    alert(summary);
    
    // Clear cart and close modal
    clearCart();
    toggleCart();
}

// Collect customer information for order
function collectCustomerInfo() {
    // Try to get info from contact form or use defaults
    const name = document.getElementById('customerName')?.value || 'Client anonyme';
    const email = document.getElementById('customerEmail')?.value || 'Non fourni';
    const phone = document.getElementById('customerPhone')?.value || 'Non fourni';
    const address = document.getElementById('deliveryAddress')?.value || 'À confirmer';
    const paymentMethod = document.getElementById('paymentMethod')?.value || 'À confirmer';
    
    return { name, email, phone, address, paymentMethod };
}

// Create customer info form in cart modal
function addCustomerInfoToCart() {
    const cartModal = document.getElementById('cartModal');
    if (!cartModal) return;
    
    // Check if form already exists
    if (document.getElementById('customerInfoForm')) return;
    
    const customerForm = document.createElement('div');
    customerForm.id = 'customerInfoForm';
    customerForm.innerHTML = `
        <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee;">
            <h4 style="margin-bottom: 1rem; color: var(--primary-color);">Informations de livraison</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <input type="text" id="customerName" placeholder="Nom complet" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                <input type="email" id="customerEmail" placeholder="Email" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                <input type="tel" id="customerPhone" placeholder="Téléphone" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                <select id="paymentMethod" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                    <option value="">Méthode de paiement</option>
                    <option value="Mobile Money">Mobile Money</option>
                    <option value="Virement bancaire">Virement bancaire</option>
                    <option value="Espèces">Espèces</option>
                </select>
            </div>
            <textarea id="deliveryAddress" placeholder="Adresse de livraison" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem;" rows="2"></textarea>
        </div>
    `;
    
    // Insert before checkout button
    const checkoutBtn = cartModal.querySelector('.checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.parentNode.insertBefore(customerForm, checkoutBtn);
    }
}

// Initialize email system
function initializeEmailSystem() {
    loadEmailConfig();
    initializeEmailJS();
    
    // Override original functions
    if (typeof addToCart === 'function') {
        window.originalAddToCart = addToCart;
        window.addToCart = addToCartWithEmailNotification;
    }
    
    if (typeof checkout === 'function') {
        window.originalCheckout = checkout;
        window.checkout = checkoutWithEmailNotification;
    }
    
    // Add customer info form to cart modal
    setTimeout(addCustomerInfoToCart, 1000);
}

// Test email function (for development)
function testEmailNotification() {
    const testProduct = {
        name: "Test Product",
        brand: "Test Brand",
        price: 10000
    };
    
    sendCartNotificationEmail(testProduct, 1);
    showNotification('Email de test envoyé!', 'success');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Delay initialization to ensure other scripts are loaded
    setTimeout(initializeEmailSystem, 500);
});

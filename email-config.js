// email-config.js - Configuration EmailJS pour Khadija Parfum
// MODIFIEZ CES VALEURS AVEC VOS IDENTIFIANTS EMAILJS

const EMAILJS_CONFIG = {
    // Remplacez par votre Service ID EmailJS
    serviceId: 'service_khadija_parfum',
    
    // Remplacez par vos Template IDs EmailJS
    templateId: {
        cart: 'template_cart_notification',     // Template pour ajout au panier
        order: 'template_order_confirmation'    // Template pour commande
    },
    
    // Remplacez par votre User ID EmailJS
    userId: 'your_user_id_here',
    
    // Email de destination pour les notifications
    notificationEmail: 'amadoubasse62@gmail.com'
};

// Fonction pour tester la configuration
function testEmailConfiguration() {
    console.log('Configuration EmailJS:');
    console.log('Service ID:', EMAILJS_CONFIG.serviceId);
    console.log('User ID:', EMAILJS_CONFIG.userId);
    console.log('Template Cart:', EMAILJS_CONFIG.templateId.cart);
    console.log('Template Order:', EMAILJS_CONFIG.templateId.order);
    console.log('Email de notification:', EMAILJS_CONFIG.notificationEmail);
    
    if (EMAILJS_CONFIG.userId === 'your_user_id_here') {
        console.warn('⚠️ ATTENTION: Vous devez configurer vos identifiants EmailJS!');
        console.log('📧 Consultez le fichier EMAILJS_SETUP.md pour les instructions');
    } else {
        console.log('✅ Configuration EmailJS prête!');
    }
}

// Exporter la configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EMAILJS_CONFIG;
}


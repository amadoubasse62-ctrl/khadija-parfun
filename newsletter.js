// newsletter.js - Newsletter subscription functionality

function initializeNewsletter() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const emailInput = e.target.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    
    // Validate email
    if (!validateEmail(email)) {
        showNotification('Veuillez entrer une adresse email valide', 'error');
        return;
    }
    
    // Change button state
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Inscription en cours...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Send email notification to admin
        if (typeof sendNewsletterNotification === 'function') {
            sendNewsletterNotification(email);
        }
        
        // Show success message
        showNotification('Merci pour votre inscription à notre newsletter!', 'success');
        
        // Reset form
        emailInput.value = '';
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Save to localStorage
        saveNewsletterSubscription(email);
    }, 1500);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function saveNewsletterSubscription(email) {
    try {
        const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
        if (!subscribers.includes(email)) {
            subscribers.push(email);
            localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
        }
    } catch (error) {
        console.warn('Unable to save newsletter subscription:', error);
    }
}

function sendNewsletterNotification(email) {
    if (typeof emailjs === 'undefined' || !EMAILJS_CONFIG) return;
    
    const templateParams = {
        to_email: EMAILJS_CONFIG.notificationEmail || 'amadoubasse62@gmail.com',
        to_name: 'Khadija Parfum',
        subscriber_email: email,
        subscription_date: new Date().toLocaleString('fr-FR'),
        site_url: window.location.origin
    };
    
    // This would use a newsletter template if configured
    console.log('Newsletter subscription:', templateParams);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeNewsletter);

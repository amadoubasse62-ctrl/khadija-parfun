// forms.js - Form handling and validation for Khadija Parfum

// Contact form handling
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', handleContactFormSubmit);
    
    // Add real-time validation
    const inputs = contactForm.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    // Validate form
    if (!validateContactForm(data)) {
        return;
    }
    
    // Simulate form submission
    submitContactForm(data);
}

function validateContactForm(data) {
    let isValid = true;
    
    // Validate name
    if (!data.name || data.name.trim().length < 2) {
        showFieldError('name', 'Le nom doit contenir au moins 2 caractères');
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        showFieldError('email', 'Veuillez entrer une adresse email valide');
        isValid = false;
    }
    
    // Validate subject
    if (!data.subject) {
        showFieldError('subject', 'Veuillez sélectionner un sujet');
        isValid = false;
    }
    
    // Validate message
    if (!data.message || data.message.trim().length < 10) {
        showFieldError('message', 'Le message doit contenir au moins 10 caractères');
        isValid = false;
    }
    
    return isValid;
}

function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    
    switch (field.name) {
        case 'name':
            if (value.length < 2) {
                showFieldError(field.name, 'Le nom doit contenir au moins 2 caractères');
            }
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field.name, 'Veuillez entrer une adresse email valide');
            }
            break;
        case 'message':
            if (value.length < 10) {
                showFieldError(field.name, 'Le message doit contenir au moins 10 caractères');
            }
            break;
    }
}

function showFieldError(fieldName, message) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    if (!field) return;
    
    // Remove existing error
    clearFieldError({ target: field });
    
    // Add error class
    field.style.borderColor = '#dc3545';
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    `;
    
    field.parentNode.appendChild(errorDiv);
}

function clearFieldError(e) {
    const field = e.target;
    field.style.borderColor = '';
    
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) {
        errorDiv.remove();
    }
}

function submitContactForm(data) {
    // Show loading state
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Success response
        showNotification(`Merci ${data.name}! Votre message a été envoyé avec succès.`, 'success');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Clear any remaining errors
        document.querySelectorAll('.field-error').forEach(error => error.remove());
        document.querySelectorAll('input, textarea, select').forEach(field => {
            field.style.borderColor = '';
        });
        
    }, 2000);
}

// Newsletter subscription
function initializeNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (!newsletterForm) return;
    
    newsletterForm.addEventListener('submit', handleNewsletterSubmit);
}

function handleNewsletterSubmit(e) {
    e.preventDefault();
    
    const email = e.target.querySelector('input[type="email"]').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        showNotification('Veuillez entrer une adresse email valide', 'error');
        return;
    }
    
    // Simulate subscription
    showNotification('Merci pour votre inscription à notre newsletter!', 'success');
    e.target.reset();
}

// Product review form
function initializeReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    if (!reviewForm) return;
    
    reviewForm.addEventListener('submit', handleReviewSubmit);
    
    // Star rating functionality
    const stars = reviewForm.querySelectorAll('.star-rating');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => setRating(index + 1));
        star.addEventListener('mouseenter', () => highlightStars(index + 1));
    });
    
    const ratingContainer = reviewForm.querySelector('.rating-container');
    if (ratingContainer) {
        ratingContainer.addEventListener('mouseleave', resetStarHighlight);
    }
}

let currentRating = 0;

function setRating(rating) {
    currentRating = rating;
    updateStarDisplay(rating);
    document.getElementById('rating').value = rating;
}

function highlightStars(rating) {
    updateStarDisplay(rating);
}

function resetStarHighlight() {
    updateStarDisplay(currentRating);
}

function updateStarDisplay(rating) {
    const stars = document.querySelectorAll('.star-rating');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.textContent = '★';
            star.style.color = '#ffc107';
        } else {
            star.textContent = '☆';
            star.style.color = '#ccc';
        }
    });
}

function handleReviewSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        rating: formData.get('rating'),
        comment: formData.get('comment')
    };
    
    if (!data.name || !data.email || !data.rating || !data.comment) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }
    
    // Simulate review submission
    showNotification('Merci pour votre avis! Il sera publié après modération.', 'success');
    e.target.reset();
    setRating(0);
}

// Form validation utilities
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
}

function validateRequired(value) {
    return value && value.trim().length > 0;
}

function validateMinLength(value, minLength) {
    return value && value.trim().length >= minLength;
}

// Initialize all forms when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
    initializeNewsletterForm();
    initializeReviewForm();
});

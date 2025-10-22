// loader.js - Loading indicators for async actions

// Create and inject loader CSS
function injectLoaderStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .loader-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .loader-overlay.active {
            opacity: 1;
            visibility: visible;
        }

        .loader-content {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
            max-width: 300px;
        }

        .loader-spinner {
            width: 50px;
            height: 50px;
            margin: 0 auto 1rem;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #8B4513;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        .loader-text {
            color: #8B4513;
            font-weight: 600;
            font-size: 1.1rem;
        }

        /* Button loader */
        .btn-loading {
            position: relative;
            color: transparent !important;
            pointer-events: none;
        }

        .btn-loading::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: 50%;
            left: 50%;
            margin-left: -8px;
            margin-top: -8px;
            border: 2px solid white;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }

        /* Inline loader */
        .inline-loader {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #8B4513;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-left: 0.5rem;
        }

        /* Page loader */
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #8B4513 0%, #D4AF37 50%, #8B4513 100%);
            background-size: 200% 100%;
            animation: loading 1.5s ease-in-out infinite;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease;
        }

        .page-loader.active {
            opacity: 1;
            visibility: visible;
        }

        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }
    `;
    document.head.appendChild(style);
}

// Create loader overlay element
function createLoaderOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'loader-overlay';
    overlay.id = 'loaderOverlay';
    overlay.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text" id="loaderText">Chargement...</div>
        </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
}

// Create page loader
function createPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.id = 'pageLoader';
    document.body.appendChild(loader);
    return loader;
}

// Show full screen loader
function showLoader(text = 'Chargement...') {
    const overlay = document.getElementById('loaderOverlay') || createLoaderOverlay();
    const loaderText = document.getElementById('loaderText');
    if (loaderText) {
        loaderText.textContent = text;
    }
    overlay.classList.add('active');
}

// Hide full screen loader
function hideLoader() {
    const overlay = document.getElementById('loaderOverlay');
    if (overlay) {
        overlay.classList.remove('active');
    }
}

// Show page loader (top bar)
function showPageLoader() {
    const loader = document.getElementById('pageLoader') || createPageLoader();
    loader.classList.add('active');
}

// Hide page loader
function hidePageLoader() {
    const loader = document.getElementById('pageLoader');
    if (loader) {
        loader.classList.remove('active');
    }
}

// Show button loader
function showButtonLoader(button, originalText) {
    if (!button) return null;
    
    const text = originalText || button.textContent;
    button.setAttribute('data-original-text', text);
    button.classList.add('btn-loading');
    button.disabled = true;
    
    return text;
}

// Hide button loader
function hideButtonLoader(button) {
    if (!button) return;
    
    const originalText = button.getAttribute('data-original-text');
    button.classList.remove('btn-loading');
    button.disabled = false;
    if (originalText) {
        button.textContent = originalText;
        button.removeAttribute('data-original-text');
    }
}

// Create inline loader
function createInlineLoader() {
    const loader = document.createElement('span');
    loader.className = 'inline-loader';
    return loader;
}

// Simulate async action with loader
async function withLoader(asyncFunction, loaderText = 'Chargement...') {
    showLoader(loaderText);
    try {
        const result = await asyncFunction();
        hideLoader();
        return result;
    } catch (error) {
        hideLoader();
        throw error;
    }
}

// Simulate async action with button loader
async function withButtonLoader(button, asyncFunction) {
    const originalText = showButtonLoader(button);
    try {
        const result = await asyncFunction();
        hideButtonLoader(button);
        return result;
    } catch (error) {
        hideButtonLoader(button);
        throw error;
    }
}

// Initialize loader system
function initializeLoader() {
    injectLoaderStyles();
    createLoaderOverlay();
    createPageLoader();
}

// Export functions
if (typeof window !== 'undefined') {
    window.showLoader = showLoader;
    window.hideLoader = hideLoader;
    window.showPageLoader = showPageLoader;
    window.hidePageLoader = hidePageLoader;
    window.showButtonLoader = showButtonLoader;
    window.hideButtonLoader = hideButtonLoader;
    window.createInlineLoader = createInlineLoader;
    window.withLoader = withLoader;
    window.withButtonLoader = withButtonLoader;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLoader);

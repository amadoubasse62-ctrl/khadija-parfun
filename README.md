# 🌸 Khadija Parfum - Site E-commerce de Parfums

Bienvenue sur le site e-commerce **Khadija Parfum**, une boutique en ligne élégante et professionnelle pour la vente de parfums de luxe au Sénégal.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 📋 Table des Matières

- [Aperçu](#aperçu)
- [Fonctionnalités](#fonctionnalités)
- [Technologies Utilisées](#technologies-utilisées)
- [Structure du Projet](#structure-du-projet)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [Pages Disponibles](#pages-disponibles)
- [Notifications Email](#notifications-email)
- [Personnalisation](#personnalisation)
- [Support](#support)
- [Licence](#licence)

## 🎯 Aperçu

Khadija Parfum est un site e-commerce complet et responsive conçu pour offrir une expérience d'achat en ligne exceptionnelle dans le domaine de la parfumerie de luxe.

### Caractéristiques Principales

- ✅ Design moderne et élégant adapté au luxe
- ✅ 100% Responsive (mobile, tablette, desktop)
- ✅ Panier d'achat interactif avec persistance
- ✅ Système de notifications email automatiques
- ✅ Recherche et filtrage de produits
- ✅ Pages FAQ et Conditions de vente
- ✅ Newsletter intégrée
- ✅ Formulaire de contact fonctionnel

## 🚀 Fonctionnalités

### 🛒 E-commerce
- **Catalogue de produits** : 8 parfums avec descriptions détaillées
- **Panier intelligent** : Ajout, suppression, modification de quantités
- **Persistance** : Le panier est sauvegardé localement
- **Recherche** : Recherche en temps réel par nom, marque ou description
- **Filtres** : Filtrage par catégorie (Femme, Homme, Unisexe, Luxe)
- **Pages produit** : Détails complets avec galerie d'images et notes olfactives

### 📧 Notifications
- **Emails automatiques** pour chaque ajout au panier
- **Confirmation de commande** par email
- **Newsletter** avec gestion des abonnés
- **Service EmailJS** intégré

### 📱 Pages
- **Accueil** : Hero section + catalogue complet
- **À Propos** : Histoire, équipe, statistiques
- **Produits** : Page détail avec onglets
- **Contact** : Formulaire avec validation
- **FAQ** : Questions fréquentes avec recherche
- **CGV** : Conditions générales de vente
- **Confirmation** : Page de confirmation de commande

### 🎨 Design
- **Palette de couleurs** : Tons chauds (marron, doré, beige)
- **Typographie** : Segoe UI, moderne et lisible
- **Animations** : Transitions fluides et effets de survol
- **Icons** : Emojis natifs pour une meilleure compatibilité

## 💻 Technologies Utilisées

### Frontend
- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Grid, Flexbox
- **JavaScript ES6** : Modules, fonctions modernes

### Services Externes
- **EmailJS** : Envoi d'emails transactionnels
- **Unsplash** : Images de haute qualité

### Stockage
- **LocalStorage** : Persistance du panier et données

## 📁 Structure du Projet

```
khadija-parfum/
├── index.html (mon site.html)  # Page d'accueil
├── about.html                   # Page à propos
├── product.html                 # Page détails produit
├── contact.html                 # Page contact
├── faq.html                     # Page FAQ
├── conditions.html              # Conditions de vente
├── confirmation.html            # Confirmation commande
├── test-email.html              # Page test EmailJS
│
├── styles.css                   # Styles principaux
│
├── app.js                       # Application principale
├── cart.js                      # Gestion du panier
├── product.js                   # Gestion des produits
├── forms.js                     # Validation formulaires
├── email.js                     # Système d'emails
├── email-config.js              # Configuration EmailJS
├── newsletter.js                # Gestion newsletter
├── loader.js                    # Système de loaders
│
├── EMAILJS_SETUP.md             # Guide configuration EmailJS
└── README.md                    # Ce fichier
```

## 🔧 Installation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un serveur web local (optionnel) ou GitHub Pages

### Installation Locale

1. **Cloner ou télécharger le projet**
   ```bash
   git clone https://github.com/votre-repo/khadija-parfum.git
   cd khadija-parfum
   ```

2. **Ouvrir dans le navigateur**
   - Double-cliquez sur `mon site.html`
   - Ou utilisez un serveur local :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node.js
   npx http-server
   ```

3. **Accéder au site**
   - Ouvrez `http://localhost:8000/mon site.html`

## ⚙️ Configuration

### 1. Configuration EmailJS

Pour activer les notifications email :

1. Créez un compte sur [EmailJS.com](https://www.emailjs.com)
2. Connectez votre Gmail (amadoubasse62@gmail.com)
3. Créez un service email et notez le Service ID
4. Créez les templates (voir `EMAILJS_SETUP.md`)
5. Modifiez `email-config.js` :

```javascript
const EMAILJS_CONFIG = {
    serviceId: 'votre_service_id',
    templateId: {
        cart: 'votre_template_panier',
        order: 'votre_template_commande'
    },
    userId: 'votre_user_id',
    notificationEmail: 'amadoubasse62@gmail.com'
};
```

### 2. Personnalisation des Produits

Modifiez les produits dans `app.js` :

```javascript
const products = [
    {
        id: 1,
        name: "Nom du Parfum",
        brand: "Marque",
        category: "femme", // femme, homme, unisexe, luxe
        price: 25000, // en FCFA
        description: "Description du parfum",
        image: "url_image.jpg",
        // ... autres propriétés
    }
];
```

### 3. Coordonnées de Contact

Les coordonnées sont déjà mises à jour :
- **Téléphone** : +221 78 714 63 90
- **Email** : contact@khadijaparfun.com
- **Adresse** : Diourbel, Sénégal

## 📖 Utilisation

### Navigation Client

1. **Parcourir les produits** sur la page d'accueil
2. **Filtrer par catégorie** (Femme, Homme, Unisexe, Luxe)
3. **Rechercher** un parfum spécifique
4. **Cliquer sur "Voir"** pour les détails
5. **Ajouter au panier** les produits souhaités
6. **Vérifier le panier** (icône 🛒)
7. **Remplir les informations** de livraison
8. **Passer la commande**
9. **Recevoir la confirmation** par email

### Fonctionnalités Administrateur

- **Notifications email** automatiques à amadoubasse62@gmail.com
- **Détails complets** de chaque commande
- **Informations client** (nom, email, téléphone, adresse)
- **Suivi des abonnés** newsletter

## 📄 Pages Disponibles

### 1. Page d'Accueil (`mon site.html`)
- Hero section avec appel à l'action
- Barre de recherche
- Catégories de parfums
- Catalogue complet de produits
- Newsletter
- Footer complet

### 2. À Propos (`about.html`)
- Histoire de l'entreprise
- Valeurs et mission
- Équipe
- Statistiques

### 3. Produit (`product.html`)
- Galerie d'images
- Détails complets
- Notes olfactives
- Avis clients
- Sélecteur de quantité

### 4. Contact (`contact.html`)
- Formulaire de contact
- Informations de contact
- Carte de localisation (placeholder)

### 5. FAQ (`faq.html`)
- Questions fréquentes
- Recherche dans les FAQ
- Filtrage par catégorie
- Accordéon interactif

### 6. Conditions (`conditions.html`)
- CGV complètes
- Table des matières
- Politique de retour
- Garanties

### 7. Confirmation (`confirmation.html`)
- Récapitulatif de commande
- Prochaines étapes
- Actions rapides

## 📧 Notifications Email

### Types de Notifications

1. **Ajout au Panier**
   - Produit ajouté
   - Quantité
   - Prix
   - Horodatage

2. **Confirmation de Commande**
   - Numéro de commande
   - Détails complet
   - Informations client
   - Montant total

3. **Newsletter**
   - Email de l'abonné
   - Date d'inscription

### Configuration

Consultez `EMAILJS_SETUP.md` pour les instructions détaillées.

## 🎨 Personnalisation

### Couleurs

Modifiez les variables CSS dans `styles.css` :

```css
:root {
    --primary-color: #8B4513;      /* Marron principal */
    --secondary-color: #D4AF37;    /* Doré */
    --accent-color: #F5E6D3;       /* Beige clair */
    --text-dark: #2C1810;          /* Texte foncé */
    --text-light: #6B4E3D;         /* Texte clair */
}
```

### Logo

Remplacez l'emoji 🌸 par votre logo dans toutes les pages :

```html
<span class="logo-icon">🌸</span>
```

### Images

Remplacez les URLs Unsplash par vos propres images dans `app.js`.

## 🐛 Dépannage

### Le panier ne se sauvegarde pas
- Vérifiez que localStorage est activé
- Testez sur un serveur web (pas en file://)

### Les emails ne sont pas envoyés
- Vérifiez la configuration EmailJS
- Consultez la console pour les erreurs
- Testez avec `test-email.html`

### Les images ne s'affichent pas
- Vérifiez votre connexion internet
- Remplacez par des images locales

## 📞 Support

### Contact
- **Email** : amadoubasse62@gmail.com
- **Téléphone** : +221 78 714 63 90

### Documentation
- `EMAILJS_SETUP.md` : Configuration EmailJS
- `README.md` : Ce fichier
- Commentaires dans le code

## 📜 Licence

© 2024 Khadija Parfum. Tous droits réservés.

Ce projet est développé pour Khadija Parfum, Diourbel, Sénégal.

---

## 🎉 Fonctionnalités Avancées

### ✨ À Venir
- Intégration paiement mobile (Orange Money, Wave)
- Système de commentaires et avis
- Programme de fidélité
- Codes promo et réductions
- Wishlist (liste de souhaits)
- Comparateur de parfums
- Chat en direct

### 🔒 Sécurité
- Validation côté client et serveur
- Protection contre XSS
- Données sensibles chiffrées
- HTTPS recommandé en production

### 📊 Analytics
- Intégration Google Analytics recommandée
- Suivi des conversions
- Analyse du comportement utilisateur

---

**Développé avec ❤️ pour Khadija Parfum**

Pour toute question ou suggestion, n'hésitez pas à nous contacter !


# 📘 Guide d'Utilisation - Khadija Parfum

## 🎯 Guide Rapide de Démarrage

### Pour le Propriétaire du Site

Félicitations ! Votre site e-commerce **Khadija Parfum** est maintenant complet et prêt à l'emploi.

---

## 📋 Checklist de Mise en Ligne

### ✅ Avant de Lancer

- [ ] Tester toutes les pages sur différents navigateurs
- [ ] Vérifier l'affichage mobile
- [ ] Configurer EmailJS (voir section Email)
- [ ] Remplacer les images placeholder par vos photos
- [ ] Vérifier les coordonnées de contact
- [ ] Tester le formulaire de contact
- [ ] Tester le processus de commande complet
- [ ] Lire les conditions de vente et les personnaliser si nécessaire

---

## 🗂️ Structure du Site

### Pages Principales

1. **`mon site.html`** - Page d'accueil
   - Affiche tous les produits
   - Barre de recherche
   - Catégories
   - Newsletter

2. **`about.html`** - À propos
   - Votre histoire
   - Votre équipe
   - Vos valeurs

3. **`product.html`** - Détails produit
   - Photos
   - Description complète
   - Notes olfactives
   - Avis clients

4. **`contact.html`** - Contact
   - Formulaire
   - Coordonnées
   - Carte

5. **`faq.html`** - FAQ
   - Questions fréquentes
   - Recherche
   - Catégories

6. **`conditions.html`** - CGV
   - Conditions de vente
   - Politique de retour
   - Garanties

7. **`confirmation.html`** - Confirmation
   - Après commande
   - Récapitulatif

---

## 📧 Configuration des Emails

### Étape 1 : Créer un Compte EmailJS

1. Allez sur https://www.emailjs.com
2. Créez un compte gratuit
3. Confirmez votre email

### Étape 2 : Configurer Gmail

1. Dans EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Sélectionnez "Gmail"
4. Connectez votre compte Gmail (amadoubasse62@gmail.com)
5. Notez le **Service ID** généré

### Étape 3 : Créer les Templates

#### Template 1 : Notification Panier

- **Nom** : template_cart_notification
- **Sujet** : Nouveau produit ajouté - {{product_name}}
- **Contenu** :
```
Bonjour,

Un nouveau produit a été ajouté au panier :

Produit: {{product_name}}
Marque: {{product_brand}}
Prix: {{product_price}}
Quantité: {{quantity}}
Total: {{total_price}}

Client: {{customer_info}}
Date: {{timestamp}}

Site: {{site_url}}
```

#### Template 2 : Confirmation Commande

- **Nom** : template_order_confirmation
- **Sujet** : Commande #{{order_id}} confirmée
- **Contenu** :
```
Bonjour,

Nouvelle commande reçue !

Commande: #{{order_id}}
Date: {{order_date}}

CLIENT:
Nom: {{customer_name}}
Email: {{customer_email}}
Tél: {{customer_phone}}
Adresse: {{delivery_address}}

COMMANDE:
{{order_items}}

Total articles: {{total_items}}
Montant: {{total_amount}}
Paiement: {{payment_method}}

Site: {{site_url}}
```

### Étape 4 : Configurer le Site

Ouvrez le fichier `email-config.js` et modifiez :

```javascript
const EMAILJS_CONFIG = {
    serviceId: 'VOTRE_SERVICE_ID',        // De l'étape 2
    templateId: {
        cart: 'template_cart_notification',  // ID du template panier
        order: 'template_order_confirmation' // ID du template commande
    },
    userId: 'VOTRE_USER_ID',              // Trouvez-le dans Account > API Keys
    notificationEmail: 'amadoubasse62@gmail.com'
};
```

### Étape 5 : Tester

1. Ouvrez `test-email.html` dans votre navigateur
2. Cliquez sur "Vérifier Configuration"
3. Testez les notifications
4. Vérifiez que les emails arrivent sur amadoubasse62@gmail.com

---

## 🛒 Gestion des Produits

### Ajouter un Produit

Ouvrez `app.js` et ajoutez dans le tableau `products` :

```javascript
{
    id: 9,                              // ID unique
    name: "Nom du Parfum",
    brand: "Marque",
    category: "femme",                  // femme, homme, unisexe, luxe
    price: 30000,                       // Prix en FCFA
    description: "Description courte",
    image: "url_image.jpg",             // Image principale
    images: [                           // 3 images pour la galerie
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ],
    features: [                         // Caractéristiques
        "Concentration: Eau de Parfum",
        "Durée: 6-8 heures",
        "Volume: 50ml",
        "Origine: France",
        "Type: Florale",
        "Occasion: Tous les jours"
    ],
    notes: {                            // Notes olfactives
        top: ["Rose", "Bergamote"],
        heart: ["Jasmin", "Muguet"],
        base: ["Musc", "Santal"]
    }
}
```

### Modifier un Produit

1. Trouvez le produit par son `id`
2. Modifiez les propriétés souhaitées
3. Sauvegardez le fichier

### Supprimer un Produit

Supprimez l'objet complet du tableau `products`.

---

## 💰 Tarification

### Prix Actuels

Modifiez les prix dans `app.js` :

```javascript
price: 25000  // Prix en FCFA
```

### Frais de Livraison

Modifiez dans toutes les pages (cherchez "Livraison") :

- Gratuit dès : 50 000 FCFA
- Diourbel : 2 000 FCFA
- Reste du Sénégal : 3 000 FCFA

---

## 📱 Coordonnées de Contact

### Actuellement Configuré

- **Téléphone** : +221 78 714 63 90
- **Email** : contact@khadijaparfun.com
- **Email notifications** : amadoubasse62@gmail.com
- **Adresse** : Diourbel, Sénégal

### Pour Modifier

Cherchez et remplacez dans tous les fichiers HTML :
- `+221 78 714 63 90`
- `contact@khadijaparfun.com`
- `Diourbel, Sénégal`

---

## 🎨 Personnalisation du Design

### Couleurs

Modifiez dans `styles.css` ligne 11-20 :

```css
:root {
    --primary-color: #8B4513;      /* Marron */
    --secondary-color: #D4AF37;    /* Doré */
    --accent-color: #F5E6D3;       /* Beige */
}
```

### Logo

Remplacez `🌸` par votre logo dans toutes les pages.

### Images

Remplacez les URLs Unsplash par vos propres images.

---

## 📊 Suivi des Commandes

### Notifications Reçues

Chaque fois qu'un client :
- Ajoute un produit au panier → Email à amadoubasse62@gmail.com
- Passe une commande → Email détaillé à amadoubasse62@gmail.com

### Informations dans l'Email

- Numéro de commande unique
- Nom et coordonnées du client
- Détails des produits
- Montant total
- Adresse de livraison
- Méthode de paiement

---

## 🔧 Maintenance

### Sauvegardes

Sauvegardez régulièrement :
- Tous les fichiers HTML
- Tous les fichiers JS
- Le fichier CSS
- Les images

### Mises à Jour

Pour ajouter de nouvelles fonctionnalités :
1. Testez sur une copie locale
2. Vérifiez sur mobile
3. Déployez

---

## 📈 Statistiques

### Données Collectées

Le site collecte localement (dans le navigateur du client) :
- Panier en cours
- Abonnés newsletter

### Pour Ajouter Google Analytics

Ajoutez avant `</head>` dans chaque page :

```html
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🚀 Mise en Ligne

### Option 1 : GitHub Pages (Gratuit)

1. Créez un compte GitHub
2. Créez un nouveau repository
3. Uploadez tous les fichiers
4. Activez GitHub Pages dans Settings
5. Votre site sera sur : `votrenom.github.io/khadija-parfum`

### Option 2 : Hébergement Payant

1. Choisissez un hébergeur (OVH, Hostinger, etc.)
2. Achetez un nom de domaine (khadijaparfun.com)
3. Uploadez tous les fichiers via FTP
4. Configurez le domaine

---

## 🆘 Support et Aide

### Problèmes Courants

**Le panier ne fonctionne pas**
→ Testez sur un serveur web (pas en double-clic)

**Les emails ne partent pas**
→ Vérifiez la configuration EmailJS
→ Ouvrez `test-email.html` pour tester

**Le site est lent**
→ Optimisez les images
→ Utilisez un CDN pour les images

### Obtenir de l'Aide

- Consultez `README.md`
- Consultez `EMAILJS_SETUP.md`
- Regardez les commentaires dans le code
- Contact : amadoubasse62@gmail.com

---

## ✅ Liste de Vérification Finale

Avant de lancer officiellement :

- [ ] Tous les emails arrivent correctement
- [ ] Les images sont optimisées et rapides
- [ ] Le site fonctionne sur mobile
- [ ] Le site fonctionne sur tous les navigateurs
- [ ] Les prix sont corrects
- [ ] Les coordonnées sont à jour
- [ ] Les CGV sont personnalisées
- [ ] La FAQ est complète
- [ ] Les produits ont de belles photos
- [ ] Le processus de commande est fluide
- [ ] Vous avez testé une commande complète

---

## 🎉 Félicitations !

Votre site **Khadija Parfum** est maintenant prêt pour vendre des parfums en ligne !

### Prochaines Étapes

1. Ajoutez plus de produits
2. Prenez de belles photos de vos parfums
3. Partagez sur les réseaux sociaux
4. Lancez des promotions
5. Collectez les avis clients
6. Développez votre newsletter

**Bonne chance avec votre boutique en ligne ! 🌸**

---

*Pour toute question : amadoubasse62@gmail.com | +221 78 714 63 90*

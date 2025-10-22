# Configuration pour Mise en Ligne - Khadija Parfum

## 📁 Fichiers à Uploader

### Pages HTML (7 fichiers)
- `mon site.html` → Renommer en `index.html` pour la page d'accueil
- `about.html`
- `product.html`
- `contact.html`
- `faq.html`
- `conditions.html`
- `confirmation.html`
- `test-email.html` (pour les tests)

### Fichiers CSS (1 fichier)
- `styles.css`

### Fichiers JavaScript (8 fichiers)
- `app.js`
- `cart.js`
- `product.js`
- `forms.js`
- `email.js`
- `email-config.js`
- `newsletter.js`
- `loader.js`

### Documentation (optionnel)
- `README.md`
- `EMAILJS_SETUP.md`
- `GUIDE_UTILISATION.md`
- `MISE_EN_LIGNE.md`

---

## 🔧 Configuration Rapide

### 1. Renommer le Fichier Principal
```bash
# Renommer mon site.html en index.html
# Cela permettra au site de s'ouvrir automatiquement
```

### 2. Vérifier les Chemins
Tous les fichiers doivent être dans le même dossier :
```
votre-site/
├── index.html (anciennement mon site.html)
├── about.html
├── product.html
├── contact.html
├── faq.html
├── conditions.html
├── confirmation.html
├── test-email.html
├── styles.css
├── app.js
├── cart.js
├── product.js
├── forms.js
├── email.js
├── email-config.js
├── newsletter.js
└── loader.js
```

### 3. Tester Localement
Avant de mettre en ligne :
1. Ouvrez `index.html` dans votre navigateur
2. Testez toutes les fonctionnalités
3. Vérifiez que tous les fichiers se chargent

---

## 🚀 Déploiement Express

### Option 1 : Netlify (Recommandé - 2 minutes)

1. **Allez sur** [netlify.com](https://netlify.com)
2. **Créez un compte** gratuit
3. **Glissez-déposez** votre dossier complet
4. **Attendez 30 secondes** - votre site est en ligne !
5. **Personnalisez l'URL** : `khadija-parfum.netlify.app`

### Option 2 : GitHub Pages (5 minutes)

1. **Créez un compte** sur [github.com](https://github.com)
2. **Créez un repository** nommé `khadija-parfum`
3. **Uploadez tous vos fichiers**
4. **Allez dans Settings > Pages**
5. **Activez GitHub Pages**
6. **Votre site sera sur** : `votrenom.github.io/khadija-parfum`

### Option 3 : Vercel (3 minutes)

1. **Allez sur** [vercel.com](https://vercel.com)
2. **Connectez-vous** avec GitHub
3. **Importez votre repository**
4. **Cliquez Deploy**
5. **Votre site est en ligne !**

---

## ⚙️ Configuration EmailJS

### Avant la mise en ligne, configurez EmailJS :

1. **Créez un compte** sur [emailjs.com](https://emailjs.com)
2. **Connectez Gmail** (amadoubasse62@gmail.com)
3. **Créez les templates** (voir EMAILJS_SETUP.md)
4. **Modifiez email-config.js** avec vos IDs
5. **Testez** avec test-email.html

---

## 📱 Test Final

### Vérifications Obligatoires

- [ ] Le site s'ouvre correctement
- [ ] Toutes les pages se chargent
- [ ] Le panier fonctionne
- [ ] La recherche fonctionne
- [ ] Le formulaire de contact fonctionne
- [ ] Les emails arrivent sur amadoubasse62@gmail.com
- [ ] Le site s'affiche bien sur mobile
- [ ] Tous les liens fonctionnent

### Test Mobile
1. Ouvrez le site sur votre téléphone
2. Testez le panier
3. Testez le formulaire de contact
4. Vérifiez que tout est lisible

---

## 🌍 Nom de Domaine Personnalisé

### Si vous voulez un nom de domaine (ex: khadijaparfun.com)

#### Avec Netlify :
1. Allez dans "Domain settings"
2. "Add custom domain"
3. Entrez votre domaine
4. Configurez les DNS chez votre registrar

#### Avec GitHub Pages :
1. Allez dans "Settings > Pages"
2. "Custom domain"
3. Entrez votre domaine
4. Configurez les DNS

---

## 📊 Analytics (Optionnel)

### Google Analytics
Ajoutez ce code avant `</head>` dans chaque page :

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔒 Sécurité

### HTTPS
- Tous les hébergeurs modernes incluent HTTPS automatiquement
- Vérifiez que votre site utilise HTTPS

### Données Sensibles
- Ne mettez jamais de mots de passe dans le code
- Utilisez EmailJS pour les emails (sécurisé)

---

## 📈 Performance

### Optimisation des Images
- Utilisez des images de moins de 500KB
- Format recommandé : JPEG ou WebP
- Résolution : 800px max pour les images produits

### Vitesse de Chargement
- Le site est optimisé pour être rapide
- Tous les fichiers sont minifiés automatiquement par les hébergeurs

---

## 🆘 Support

### En Cas de Problème

1. **Le site ne s'affiche pas**
   → Vérifiez que tous les fichiers sont uploadés
   → Vérifiez les noms de fichiers (pas d'espaces)

2. **Les emails ne fonctionnent pas**
   → Vérifiez la configuration EmailJS
   → Testez avec test-email.html

3. **Le site est lent**
   → Optimisez les images
   → Vérifiez votre connexion internet

### Contact Support
- **Email** : amadoubasse62@gmail.com
- **Téléphone** : +221 78 714 63 90

---

## ✅ Checklist de Déploiement

### Avant Upload
- [ ] Renommer `mon site.html` en `index.html`
- [ ] Vérifier que tous les fichiers sont présents
- [ ] Tester le site localement
- [ ] Configurer EmailJS
- [ ] Optimiser les images

### Après Upload
- [ ] Tester le site en ligne
- [ ] Vérifier sur mobile
- [ ] Tester toutes les fonctionnalités
- [ ] Vérifier les emails
- [ ] Configurer le nom de domaine (si souhaité)

### Post-Lancement
- [ ] Partager sur les réseaux sociaux
- [ ] Créer des comptes Facebook/Instagram
- [ ] Lancer des promotions
- [ ] Surveiller les commandes
- [ ] Répondre aux clients

---

**Votre site Khadija Parfum est prêt à être mis en ligne ! 🌸**

*Configuration créée pour Khadija Parfum - Diourbel, Sénégal*

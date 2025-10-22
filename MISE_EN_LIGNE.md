# 🚀 Guide de Mise en Ligne - Khadija Parfum

## 📋 Options d'Hébergement

Voici les meilleures options pour mettre votre site en ligne, du plus simple au plus professionnel :

---

## 🌟 Option 1 : GitHub Pages (GRATUIT - Recommandé)

### Avantages
- ✅ **100% Gratuit**
- ✅ **Facile à configurer**
- ✅ **HTTPS automatique**
- ✅ **Nom de domaine personnalisé possible**
- ✅ **Mises à jour faciles**

### Étapes

#### 1. Créer un Compte GitHub
1. Allez sur [github.com](https://github.com)
2. Cliquez sur "Sign up"
3. Créez votre compte

#### 2. Créer un Repository
1. Cliquez sur "New repository"
2. Nom : `khadija-parfum` (ou votre choix)
3. Description : "Site e-commerce Khadija Parfum"
4. Cochez "Public"
5. Cliquez "Create repository"

#### 3. Uploader les Fichiers
1. Dans votre repository, cliquez "uploading an existing file"
2. Glissez-déposez TOUS vos fichiers :
   - `mon site.html`
   - `about.html`
   - `product.html`
   - `contact.html`
   - `faq.html`
   - `conditions.html`
   - `confirmation.html`
   - `styles.css`
   - Tous les fichiers `.js`
   - `test-email.html`
3. Message : "Initial upload - Site Khadija Parfum"
4. Cliquez "Commit changes"

#### 4. Activer GitHub Pages
1. Allez dans "Settings" de votre repository
2. Scroll jusqu'à "Pages"
3. Source : "Deploy from a branch"
4. Branch : "main"
5. Folder : "/ (root)"
6. Cliquez "Save"

#### 5. Accéder à Votre Site
- Votre site sera disponible sur : `https://votrenom.github.io/khadija-parfum`
- Attendez 5-10 minutes pour la première activation

---

## 🌐 Option 2 : Netlify (GRATUIT - Très Facile)

### Avantages
- ✅ **Drag & Drop ultra-simple**
- ✅ **HTTPS automatique**
- ✅ **Nom de domaine gratuit**
- ✅ **Mises à jour instantanées**

### Étapes

#### 1. Créer un Compte
1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez "Sign up"
3. Connectez-vous avec GitHub (recommandé)

#### 2. Déployer le Site
1. Glissez-déposez votre dossier "mon site" sur la zone de drag & drop
2. Netlify génère automatiquement une URL
3. Votre site est en ligne en 30 secondes !

#### 3. Personnaliser l'URL
1. Allez dans "Site settings"
2. "Change site name"
3. Choisissez : `khadija-parfum` ou votre choix
4. URL finale : `https://khadija-parfum.netlify.app`

---

## 💼 Option 3 : Vercel (GRATUIT - Professionnel)

### Avantages
- ✅ **Performance optimale**
- ✅ **HTTPS automatique**
- ✅ **CDN global**
- ✅ **Intégration GitHub**

### Étapes

#### 1. Créer un Compte
1. Allez sur [vercel.com](https://vercel.com)
2. "Sign up" avec GitHub

#### 2. Importer le Projet
1. "New Project"
2. Importez votre repository GitHub
3. Cliquez "Deploy"
4. Votre site est en ligne !

---

## 🏢 Option 4 : Hébergement Payant (Professionnel)

### Hébergeurs Recommandés

#### OVH (France/Afrique)
- **Prix** : ~5€/mois
- **Avantages** : Serveurs en France, support français
- **Site** : [ovh.com](https://ovh.com)

#### Hostinger
- **Prix** : ~2€/mois
- **Avantages** : Très bon rapport qualité/prix
- **Site** : [hostinger.com](https://hostinger.com)

#### Namecheap
- **Prix** : ~3€/mois
- **Avantages** : Facile à utiliser
- **Site** : [namecheap.com](https://namecheap.com)

### Étapes Générales
1. Achetez un hébergement web
2. Achetez un nom de domaine (ex: khadijaparfun.com)
3. Uploadez vos fichiers via FTP
4. Configurez le domaine

---

## 🌍 Option 5 : Nom de Domaine Personnalisé

### Acheter un Nom de Domaine

#### Sites Recommandés
- **Namecheap** : ~10€/an
- **GoDaddy** : ~12€/an
- **OVH** : ~8€/an

#### Noms Suggérés
- `khadijaparfun.com`
- `khadija-parfum.com`
- `parfum-khadija.com`
- `khadijaparfun.sn` (domaine Sénégal)

### Configuration avec GitHub Pages
1. Achetez votre domaine
2. Dans GitHub Pages Settings :
   - Cochez "Enforce HTTPS"
   - Ajoutez votre domaine dans "Custom domain"
3. Configurez les DNS chez votre registrar :
   ```
   Type: CNAME
   Name: www
   Value: votrenom.github.io
   
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

---

## ⚙️ Configuration Avant Mise en Ligne

### 1. Optimiser les Images
```bash
# Réduire la taille des images
# Utilisez des outils comme TinyPNG ou ImageOptim
# Format recommandé : WebP ou JPEG optimisé
```

### 2. Tester le Site
- [ ] Ouvrir `mon site.html` dans le navigateur
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Tester le panier
- [ ] Tester le formulaire de contact
- [ ] Vérifier les emails (test-email.html)

### 3. Configurer EmailJS
1. Suivez `EMAILJS_SETUP.md`
2. Testez avec `test-email.html`
3. Vérifiez que les emails arrivent sur amadoubasse62@gmail.com

### 4. Personnaliser le Contenu
- [ ] Remplacer les images placeholder
- [ ] Ajouter vos vrais produits
- [ ] Vérifier les prix
- [ ] Personnaliser les CGV si nécessaire

---

## 🔧 Configuration Post-Mise en Ligne

### 1. Google Analytics (Optionnel)
Ajoutez avant `</head>` dans chaque page :

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

### 2. Google Search Console
1. Allez sur [search.google.com/search-console](https://search.google.com/search-console)
2. Ajoutez votre site
3. Vérifiez la propriété
4. Soumettez votre sitemap

### 3. Facebook Pixel (Optionnel)
Pour le marketing Facebook :

```html
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'VOTRE_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

---

## 📱 Optimisation Mobile

### Vérifications
- [ ] Le site s'affiche bien sur mobile
- [ ] Les boutons sont facilement cliquables
- [ ] Les images s'adaptent à l'écran
- [ ] Le texte est lisible
- [ ] Le panier fonctionne sur mobile

### Test Mobile
1. Ouvrez votre site sur votre téléphone
2. Testez toutes les fonctionnalités
3. Vérifiez la vitesse de chargement

---

## 🚀 Déploiement Rapide (5 Minutes)

### Méthode la Plus Rapide : Netlify

1. **Préparez vos fichiers**
   - Créez un dossier ZIP avec tous vos fichiers
   - Ou gardez-les dans un dossier "mon site"

2. **Allez sur Netlify**
   - [netlify.com](https://netlify.com)
   - Créez un compte (gratuit)

3. **Déployez**
   - Glissez-déposez votre dossier
   - Attendez 30 secondes
   - Votre site est en ligne !

4. **Personnalisez**
   - Changez le nom du site
   - Configurez votre domaine personnalisé

---

## 📊 Suivi et Maintenance

### Après Mise en Ligne

#### Surveillance
- Vérifiez régulièrement que le site fonctionne
- Surveillez les emails de commande
- Répondez rapidement aux clients

#### Mises à Jour
- Ajoutez de nouveaux produits
- Mettez à jour les prix
- Ajoutez des promotions
- Améliorez le contenu

#### Sauvegardes
- Sauvegardez régulièrement vos fichiers
- Gardez une copie locale
- Documentez vos modifications

---

## 🆘 Problèmes Courants

### Le Site Ne S'Affiche Pas
- Vérifiez que tous les fichiers sont uploadés
- Vérifiez les noms de fichiers (pas d'espaces)
- Attendez 5-10 minutes pour la première activation

### Les Emails Ne Fonctionnent Pas
- Vérifiez la configuration EmailJS
- Testez avec `test-email.html`
- Vérifiez les paramètres de sécurité du navigateur

### Le Site Est Lent
- Optimisez les images
- Utilisez un CDN
- Vérifiez la taille des fichiers

---

## ✅ Checklist Finale

Avant de lancer officiellement :

- [ ] Site testé sur tous les navigateurs
- [ ] Site testé sur mobile
- [ ] Emails configurés et testés
- [ ] Images optimisées
- [ ] Contenu personnalisé
- [ ] Coordonnées à jour
- [ ] Nom de domaine configuré (si applicable)
- [ ] Google Analytics installé (si souhaité)
- [ ] Sauvegarde effectuée

---

## 🎉 Félicitations !

Votre site **Khadija Parfum** est maintenant en ligne !

### Prochaines Étapes

1. **Partagez votre site** sur les réseaux sociaux
2. **Créez des comptes** sur Facebook, Instagram
3. **Lancez des promotions** pour attirer les clients
4. **Collectez les avis** de vos premiers clients
5. **Développez votre newsletter**
6. **Ajoutez régulièrement** de nouveaux produits

### Support

Pour toute question :
- **Email** : amadoubasse62@gmail.com
- **Téléphone** : +221 78 714 63 90

---

**Votre boutique en ligne est prête ! Bonne chance avec vos ventes ! 🌸**

*Guide créé pour Khadija Parfum - Diourbel, Sénégal*

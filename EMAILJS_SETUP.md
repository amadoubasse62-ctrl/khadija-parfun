<!-- 
CONFIGURATION EMAILJS POUR KHADIJA PARFUM
==========================================

Pour activer les notifications email, suivez ces étapes :

1. CRÉER UN COMPTE EMAILJS
   - Allez sur https://www.emailjs.com/
   - Créez un compte gratuit
   - Connectez votre compte Gmail (amadoubasse62@gmail.com)

2. CONFIGURER LE SERVICE EMAIL
   - Dans le dashboard EmailJS, allez dans "Email Services"
   - Ajoutez Gmail comme service
   - Notez le "Service ID" généré

3. CRÉER LES TEMPLATES EMAIL
   
   TEMPLATE 1: Notification Panier (template_cart_notification)
   -----------------------------------------
   Sujet: Nouvelle commande - {{product_name}} ajouté au panier
   
   Contenu:
   Bonjour,
   
   Un nouveau produit a été ajouté au panier sur le site Khadija Parfum :
   
   Produit: {{product_name}}
   Marque: {{product_brand}}
   Prix unitaire: {{product_price}}
   Quantité: {{quantity}}
   Prix total: {{total_price}}
   
   Informations client: {{customer_info}}
   Date/Heure: {{timestamp}}
   
   Site: {{site_url}}
   
   Cordialement,
   Système Khadija Parfum
   
   TEMPLATE 2: Confirmation Commande (template_order_confirmation)
   -----------------------------------------
   Sujet: Commande confirmée #{{order_id}} - Khadija Parfum
   
   Contenu:
   Bonjour,
   
   Une nouvelle commande a été passée sur le site Khadija Parfum :
   
   Numéro de commande: {{order_id}}
   Date: {{order_date}}
   
   INFORMATIONS CLIENT:
   Nom: {{customer_name}}
   Email: {{customer_email}}
   Téléphone: {{customer_phone}}
   Adresse: {{delivery_address}}
   
   COMMANDE:
   {{order_items}}
   
   Total articles: {{total_items}}
   Montant total: {{total_amount}}
   Méthode de paiement: {{payment_method}}
   
   Site: {{site_url}}
   
   Cordialement,
   Système Khadija Parfum

4. CONFIGURER LES VARIABLES
   - Dans email.js, remplacez :
     * serviceId: 'service_khadija_parfum' par votre Service ID
     * userId: 'your_user_id_here' par votre User ID
     * templateId.cart: 'template_cart_notification' par votre Template ID panier
     * templateId.order: 'template_order_confirmation' par votre Template ID commande

5. AJOUTER LE SCRIPT DANS LES PAGES HTML
   - Ajoutez <script src="email.js"></script> dans toutes les pages
   - Le script se chargera automatiquement

6. TESTER
   - Ouvrez la console du navigateur
   - Tapez: testEmailNotification()
   - Vérifiez que l'email arrive sur amadoubasse62@gmail.com

NOTES IMPORTANTES:
- Le compte gratuit EmailJS permet 200 emails/mois
- Les emails sont envoyés en temps réel
- Le système fonctionne même si l'utilisateur ferme la page
- Les notifications incluent toutes les informations de la commande

-->

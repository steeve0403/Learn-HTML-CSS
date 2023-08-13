/* Body styles */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: linear-gradient(45deg, #007bff, #ff4500);
    background-size: 400% 400%;
    animation: backgroundAnimation 10s ease infinite;
    
}
.light-theme {
    background-color: #f0f0f0;
    color: #333;
}

.dark-theme {
    background-color: #333;
    color: #fff;
}
/* Styles de base */

/* ... Vos styles CSS existants ... */

/* Styles pour le menu responsive */
.main-menu {
    display: none;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #333;
    width: 400px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    padding: 10px;
}

.main-menu.active {
    display: block;
}

/* Styles pour les liens du menu */
.main-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.main-menu li {
    margin-bottom: 10px;
}

.main-menu a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    display: block;
    padding: 5px;
    transition: background-color 0.3s;
}

.main-menu a:hover {
    background-color: #555;
}

/* Styles pour le bouton de menu */
.menu-button {
    cursor: pointer;
    margin-right: 15px;
}

.menu-icon {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #333;
    margin: 6px auto;
    transition: transform 0.3s;
}

.active .menu-icon {
    transform: rotate(90deg);
}

.theme-toggle {
    background-color: #555;
    color: #fff;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.theme-toggle:hover {
    background-color: #333;
    transform: scale(1.05);
}



.page-content {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Au moins 100% de la hauteur de la fenêtre */
    justify-content: space-between; /* Espacement automatique entre les éléments */
}

/* Container styles */
.container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: fadeInDown 1s ease-in-out;
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

/* Keyframe animation for fade in and move down */
@keyframes fadeInDown {
     0% {
        transform: translate(-50%, -60%);
        opacity: 0;
    }
    100% {
        transform: translate(-50%, -50%);
        opacity: 1;
    }
}

/* Keyframe animation for background */
@keyframes backgroundAnimation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Error code styles */
.error-code {
    font-size: 8rem;
    font-weight: bold;
    color: white;
    position: relative;
    perspective: 1000px;
}

.error-code::before,
.error-code::after {
    content: "404";
    position: absolute;
    top: 0;
    left: 0;
    transform: translateZ(25px);
    animation: rotateNumber 5s linear infinite;
}

.error-code::after {
    color: rgba(255, 0, 0, 0.6);
    animation: rotateNumber 5s linear infinite reverse;
}

@keyframes rotateNumber {
    0% {
        transform: translateZ(25px) rotateY(0deg);
    }
    100% {
        transform: translateZ(25px) rotateY(360deg);
    }
}

/* Error message styles */
.error-message {
    font-size: 1.5rem;
    color: #555;
    margin-top: 10px;
}

.site-footer {
    background-color: azure;
    padding: 20px;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0; /* En bas de la page */
}

/* Home link styles */
.home-link {
    margin-top: 20px;
    display: inline-block;
    text-decoration: none;
    color: #007bff;
    border: 1px solid #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    transition: transform 0.3s, background-color 0.3s, color 0.3s;
}

.home-link:hover {
    transform: scale(1.1);
    background-color: #007bff;
    color: white;
}

/* Social icons styles */
.related-links {
    margin-top: 40px;
    text-align: center;
}

.related-links h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.social-icons {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
}

.social-icons li {
    margin: 0 10px;
}

.social-icons a {
    text-decoration: none;
    color: #007bff;
    font-size: 24px;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #ff4500;
}

/* Background bubble styles */
.background-bubbles {
    width: 100%;
    display: flex;
    justify-content: center;
    animation: moveBubbles 5s linear infinite;
    margin-top: 20px;
}

.bubble {
    width: 60px;
    height: 60px;
    background-color: rgba(0, 123, 255, 0.2);
    border-radius: 50%;
    animation: scaleBubble 3s ease-in-out infinite;
}

@keyframes moveBubbles {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes scaleBubble {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.3);
    }
}

/* Styles pour les icônes sociales en mode mobile */
@media screen and (max-width: 768px) {
    .social-icons {
        flex-direction: column;
        align-items: center;
    }

    .social-icons li {
        margin: 10px 0;
    }

    /* Styles pour les liens du footer en mode mobile */
    .site-footer h2 {
        font-size: 1.2rem;
    }
}

/* Styles pour les écrans très petits (téléphones) */
@media screen and (max-width: 480px) {
    .error-code {
        font-size: 6rem;
    }

    .error-message {
        font-size: 1.2rem;
    }

    .home-link {
        font-size: 1rem;
    }
}
// ===== SCRIPT.JS - OLEA IMMOBILIER PREMIUM =====
// Animations avancées • Micro-interactions • UI/UX Luxe

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ---------- 1. INITIALISATION AOS AMÉLIORÉE ----------
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true,
        offset: 120,
        easing: 'cubic-bezier(0.2, 0.9, 0.4, 1)',
        disable: false
    });

    // ---------- 2. AJOUT DES PARTICLES ----------
    const particlesDiv = document.createElement('div');
    particlesDiv.className = 'particles';
    document.body.prepend(particlesDiv);

    // ---------- 3. GESTION DU MENU MOBILE PREMIUM ----------
    const hamburger = document.getElementById('hamburger-btn');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const header = document.querySelector('header');

    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
                
                // Animation d'ouverture
                navLinks.style.animation = 'slideInLeft 0.5s';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Fermeture du menu avec animation
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                const icon = hamburger?.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                document.body.style.overflow = 'auto';
            }
        });
    });

    // ---------- 4. HEADER DYNAMIQUE AVANCÉ ----------
    function handleHeaderScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.transform = 'translateY(0)';
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    // ---------- 5. LIENS ACTIFS AVEC PROGRESS BAR ----------
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        let scrollY = window.pageYOffset;
        let mainHeight = header.offsetHeight;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - mainHeight - 20;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // ---------- 6. FORMULAIRE DE CONTACT AVEC ANIMATION ----------
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;
            
            // Animation de chargement
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;
            submitBtn.style.transform = 'scale(0.95)';
            
            // Simulation d'envoi avec animation
            setTimeout(() => {
                // Notification personnalisée
                showNotification('✅ Message envoyé avec succès !', 'success');
                
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.transform = 'scale(1)';
                
                // Animation de confirmation
                submitBtn.style.backgroundColor = '#00C851';
                submitBtn.style.color = 'white';
                setTimeout(() => {
                    submitBtn.style.backgroundColor = '';
                    submitBtn.style.color = '';
                }, 500);
                
            }, 1500);
        });
    }

    // ---------- 7. SYSTÈME DE NOTIFICATION PERSONNALISÉ ----------
    function showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = message;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            background: ${type === 'success' ? 'linear-gradient(135deg, #00C851, #007E33)' : 'linear-gradient(135deg, #ff4444, #CC0000)'};
            color: white;
            padding: 18px 30px;
            border-radius: 50px;
            font-weight: 600;
            box-shadow: 0 15px 35px rgba(0,0,0,0.2);
            z-index: 9999;
            animation: slideInRight 0.5s, fadeOut 0.5s 2.5s;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // ---------- 8. BOUTONS WHATSAPP AVEC TRACKING ----------
    const waButtons = document.querySelectorAll('.btn-whatsapp, .whatsapp-float');
    waButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Animation au clic
            this.style.transform = 'scale(0.9)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Tracking console (remplacer par GA plus tard)
            console.log('📱 WhatsApp cliqué:', this.href);
        });
    });

    // ---------- 9. EFFET DE PARALLAXE SUR LA SECTION HÉRO ----------
    window.addEventListener('scroll', function() {
        const hero = document.getElementById('hero');
        if (hero) {
            const scrolled = window.pageYOffset;
            hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
        }
    });

    // ---------- 10. ANIMATION AU SURVOL DES CARTES ----------
    const cards = document.querySelectorAll('.service-card, .programme-card, .team-member');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1)';
        });
    });

    // ---------- 11. COMPTEUR DE STATISTIQUES (OPTIONNEL) ----------
    function animateStats() {
        const stats = document.querySelectorAll('.stat-number');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const increment = target / 50;
            let current = 0;
            
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    stat.innerText = Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.innerText = target;
                }
            };
            
            updateCounter();
        });
    }

    // ---------- 12. FERMETURE DU MENU AU CLIC EXTÉRIEUR ----------
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            if (!navLinks.contains(event.target) && !hamburger.contains(event.target)) {
                navLinks.classList.remove('active');
                const icon = hamburger?.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
                document.body.style.overflow = 'auto';
            }
        }
    });

    // ---------- 13. RESIZE HANDLER ----------
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
            const icon = hamburger?.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
            document.body.style.overflow = 'auto';
        }
    });

    // ---------- 14. LAZY LOADING AVANCÉ ----------
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s';
                    setTimeout(() => {
                        img.style.opacity = '1';
                    }, 100);
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            img.style.opacity = '0.6';
            imageObserver.observe(img);
        });
    }

    // ---------- 15. PRELOADER (SI AJOUTÉ PLUS TARD) ----------
    // Simule la fin du chargement
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
    });
});

// ---------- 16. GESTION DES ERREURS GLOBALES ----------
window.addEventListener('error', function(e) {
    console.log('🚨 Erreur détectée:', e.message);
});

// Script de la nouvelle galerie//
// ===== GALERIE INTERACTIVE NOS RÉALISATIONS =====
(function() {
    // Ne s'exécute que si on est sur la section galerie
    if (!document.querySelector('.mainBoxes')) return;
    
    var currentImg = undefined,
        currentImgProps = {x:0, y:0},
        isZooming = false,
        column = -1,
        mouse = {x:0, y:0},
        delayedPlay;

    // Nettoyer d'abord le conteneur
    $('.mainBoxes').empty();

    // Images de la galerie (remplacez par vos propres images)
    var galleryImages = [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600596542815-60002552286b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    for (var i=0; i<12; i++){
        if (i%4==0) column++;

        var b = document.createElement('div');    
        $('.mainBoxes').append(b);
        
        gsap.set(b, {
            attr:{ id:'b'+i, class:'photoBox pb-col'+column },
            backgroundImage:'url(' + galleryImages[i] + ')',
            backgroundSize:'cover',
            backgroundPosition:'center',
            overflow:'hidden',
            x:[60,280,500][column],
            width:400,
            height:640,
            borderRadius:20,
            scale:0.5,
            zIndex:1
        });

        b.tl = gsap.timeline({paused:true, repeat:-1})
            .fromTo(b, {y:[-575,800,800][column], rotation:-0.05}, {duration:[40,35,26][column], y:[800,-575,-575][column], rotation:0.05, ease:'none'})
            .progress(i%4/4);
    }

    function pauseBoxes(b){
        var classStr = 'pb-col0';
        if ($(b).hasClass('pb-col1')) classStr = 'pb-col1';
        if ($(b).hasClass('pb-col2')) classStr = 'pb-col2';
        for (var i=0; i<$('.mainBoxes').children().length; i++) {
            var b = $('.mainBoxes').children()[i];
            if ($(b).hasClass(classStr)) gsap.to(b.tl, {timeScale:0, ease:'sine'});    
        }
    }

    function playBoxes(){ 
        for (var i=0; i<$('.mainBoxes').children().length; i++) { 
            var tl = $('.mainBoxes').children()[i].tl;
            tl.play();
            gsap.to(tl, {duration:0.4, timeScale:1, ease:'sine.in', overwrite:true});
        }
    }

    // Initialisation quand la section est visible
    function initGallery() {
        var _tl = gsap.timeline({onStart:playBoxes})
            .set('.main',        {perspective:800})
            .set('.photoBox',    {opacity:1, cursor:'pointer'})
            .set('.mainBoxes',   {left:'75%', xPercent:-50, width:1200, rotationX:14, rotationY:-15, rotationZ:10})
            .set('.mainClose',   {autoAlpha:0, width:60, height:60, left:-30, top:-31, pointerEvents:'none'})
            .fromTo('.main',     {autoAlpha:0},{duration:0.6, ease:'power2.inOut', autoAlpha:1}, 0.2);
    }

    $('.photoBox').on('mouseenter', function (e){
        if (currentImg) return;
        if (delayedPlay) delayedPlay.kill();
        pauseBoxes(e.currentTarget);
        var _t = e.currentTarget;
        gsap.to('.photoBox', {duration:0.2, overwrite:'auto', opacity:function(i,t){return (t==_t)? 1:0.33 }});
        gsap.fromTo(_t, {zIndex:100}, {duration:0.2, scale:0.62, overwrite:'auto', ease:'power3'});
    });  

    $('.photoBox').on('mouseleave', function (e){
        if (currentImg) return;    
        var _t = e.currentTarget;
        
        if (gsap.getProperty(_t, 'scale')>0.62) delayedPlay = gsap.delayedCall(0.3, playBoxes);
        else playBoxes();

        gsap.timeline()
            .set(_t, {zIndex:1})
            .to(_t, {duration:0.3, scale:0.5, overwrite:'auto', ease:'expo'}, 0)
            .to('.photoBox', {duration:0.5, opacity:1, ease:'power2.inOut'}, 0);
    });

    $('.photoBox').on('click', function (e){
        if (!isZooming){
            isZooming = true;
            gsap.delayedCall(0.8, function(){ isZooming=false });

            if (currentImg) { 
                gsap.timeline({defaults:{ease:'expo.inOut'}})
                    .to('.mainClose', {duration:0.1, autoAlpha:0, overwrite:true}, 0)
                    .to('.mainBoxes', {duration:0.5, scale:1, left:'75%', width:1200, rotationX:14, rotationY:-15, rotationZ:10, overwrite:true}, 0)
                    .to('.photoBox', {duration:0.6, opacity:1, ease:'power4.inOut'}, 0)
                    .to(currentImg, {duration:0.6, width:400, height:640, borderRadius:20, x:currentImgProps.x, y:currentImgProps.y, scale:0.5, rotation:0, zIndex:1}, 0);
                currentImg=undefined;
            }
            else {
                pauseBoxes(e.currentTarget);

                currentImg = e.currentTarget;
                currentImgProps.x = gsap.getProperty(currentImg, 'x');
                currentImgProps.y = gsap.getProperty(currentImg, 'y');
                
                gsap.timeline({defaults:{duration:0.6, ease:'expo.inOut'}})
                    .set(currentImg, {zIndex:100})
                    .fromTo('.mainClose', {x:mouse.x, y:mouse.y, background:'rgba(0,0,0,0)'}, {autoAlpha:1, duration:0.3, ease:'power3.inOut'}, 0)
                    .to('.photoBox', {opacity:0}, 0)
                    .to(currentImg, {width:'100%', height:'100%', borderRadius:0, x:0, top:0, y:0, scale:1, opacity:1}, 0)
                    .to('.mainBoxes', {duration:0.5, left:'50%', width:'100%', rotationX:0, rotationY:0, rotationZ:0}, 0.15)
                    .to('.mainBoxes', {duration:5, scale:1.06, rotation:0.05, ease:'none'}, 0.65);
            }
        }
    });

    if (!!('ontouchstart' in window)) {
        mouse.x = window.innerWidth-50;
        mouse.y = 60;
    }
    else {
        $('.main').on('mousemove', function (e){
            mouse.x = e.x;
            mouse.y = e.layerY;
            if (currentImg) gsap.to('.mainClose', {duration:0.1, x:mouse.x, y:mouse.y, overwrite:'auto'});
        });  
    }

    // Observer pour lancer l'animation quand la section est visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(initGallery, 100);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const gallerySection = document.querySelector('#galerie .main');
    if (gallerySection) {
        observer.observe(gallerySection);
    }
})();
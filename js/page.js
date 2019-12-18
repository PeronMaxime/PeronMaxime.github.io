addEventListener('load', function(){

    var sectionJeu = document.getElementById('section_jeu');
    var sectionContact = document.getElementById('section_contact');
    var afficherCv = document.getElementById('afficherCv');
    var rechargerPage = document.getElementById('rechargerPage');
    var revenirJeu = document.getElementById('revenirJeu');
    var linkedin = document.getElementById('linkedin');
    var jouer = document.getElementById('jouer');
    var sectionRegle = document.getElementById('section_regle');
    var sectionGameOver = document.getElementById('section_game_over');
    var reessayer = document.getElementById('reessayer');
    var sectionCv = document.getElementById('section_cv');
    var imageCv = document.getElementById('img_cv');
    var filtreCv = document.getElementById('filtre_cv');

    sectionContact.style.display = 'none';
    sectionGameOver.style.display = 'none';
    sectionCv.style.display = 'none';
    sectionJeu.style.display = 'none';

    imageCv.onclick = function(){
        open('pdf/CV.pdf');
    }

    imageCv.onmouseover = function(){
        filtreCv.style.opacity = '0.6';
        filtreCv.style.display = "block";
    }

    imageCv.onmouseleave = function(){
        filtreCv.style.opacity = '1';
        filtreCv.style.display = "none";
    }
    
    jouer.onclick = function(){
        sectionJeu.style.display = 'block';
        sectionRegle.style.display = 'none';
    }

    reessayer.onclick = function(){
        location.reload();
    }

    afficherCv.onclick = function(){
        sectionCv.style.display = 'flex';
        sectionJeu.style.display = 'none';
        sectionContact.style.display = 'none';
        sectionRegle.style.display = 'none';
    }
    
    rechargerPage.onclick = function(){
        location.reload();
    }
    
    afficherContact.onclick = function(){
        sectionJeu.style.display = 'none';
        sectionContact.style.display = 'block';
        sectionRegle.style.display = 'none';
        sectionCv.style.display = 'none';
    }

    revenirJeu.onclick = function(){
        if(sectionRegle.style.display == 'none'){
            sectionJeu.style.display = 'block';
            sectionContact.style.display = 'none';
            sectionCv.style.display = 'none';
        }
    }
    
    linkedin = function(){
        open('http://linkedin.maximeperon.fr', 'linkedin');
    }

});

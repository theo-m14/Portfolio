//tableau info parcours
let parcoursArray = [
    {'name' : '<h3><span><</span> E.Leclerc Limoges <span>></span></h3>', 'date':'2018', 'periode' : 'Février 2018 - Mai 2018', 'info' : 'Après une erreur d’orientation je me mets à travailler dans un E.Leclerc tout en reprenant la programmation en autodidacte avec le language C, bien décidé à en faire mon métier.'},
    {'name' : '<h3><span><</span> Première année de licence informatique <span>></span></h3>', 'date':'2019', 'periode' : 'Septembre 2018 - Juillet 2019', 'info' : 'Je réussis cette première année dans laquelle j’ai utilisé le language Processing. J’ai aussi réalisé un projet de groupe sur l’algorithme Ford-Bellman ( recherche du chemin le plus court dans un graphe pondéré et orienté ).'},
    {'name' : '<h3><span><</span> Début de deuxième année et formation OpenClassrooms <span>></span></h3>', 'date':'2020', 'periode' : 'Septembre 2018 - Juillet 2019', 'info' : 'Changement d’université, début de deuxième année, je ne me sens pas à ma place, je ne suis pas épanoui, il n’y a pas assez de pratique pour moi. Une opportunité s’offre à moi, je tente ma chance et je commence une formation avec OpenClassrooms, intitulé Prep’FullStack. Je complète la formation et pour continuer je dois trouver une alternance, en mars 2020.. Période de confinement. Mes recherches sont vaines.'},
    {'name' : '<h3><span><</span> E.Leclerc, nouveau choix d’orientation <span>></span></h3>', 'date':'2021', 'periode' : 'Octobre 2020 - Avril 2021', 'info' : 'Étant autonome je retourne travailler dans la grande distribution par nécessité. Je continue à chercher une solution d’orientation pour continuer dans le développement web.'},
    {'name' : '<h3><span><</span> Talis Buisness School <span>></span></h3>', 'date':'2022', 'periode' : 'Octobre 2021 - Juillet 2022', 'info' : "Formation professionnel de Developpeur Web et Web Mobile. À la fin de cette année je serais à l’écoute d’opportunité, comme une embauche direct ou encore une alternance pour monter en compétence. Si aucune de ces opportunités ne se présente je me lancerais en freelance afin de gagner de l'expérience."}
]

//fontion qui fait disparaitre la loading page
setTimeout(()=>{
     document.getElementById('loading').style.display = 'none';
},1800);

let getBurgerBtn = document.getElementById('burgerButton');
let getBurger = document.getElementById('burger');
let getNavBar = document.getElementsByTagName('nav')[0];

getBurger.addEventListener('click', function(){
    getBurger.classList.toggle('active');
    getNavBar.classList.toggle('active');
});

let getLiNavbar = document.querySelectorAll('nav ul li');

//Suppression de l'affichage du menu au click sur les ancres
getLiNavbar.forEach(li => li.addEventListener('click', function(){
        getBurger.classList.remove('active');
        getNavBar.classList.remove('active');
}));


let projetArray = [
    {'name':'test','desc':"Ceci est un test d'ajout de projet",'competence' : ['HTML','CSS','GIT'],'image':'url(assets/images/imageDuSitePortfolio.png)'},
    {'name':'test','desc':"Ceci est un test d'ajout de projet",'competence' : ['HTML','CSS','GIT'],'image':'url(assets/images/imageDuSitePortfolio.png)'}
]

let defaultProjectDisplay = []

//Partie parcours
let getBtnParcours = document.getElementById('btnParcours');
let getLastAnnee = document.querySelectorAll('#texteAnnee article p:first-of-type')[document.querySelectorAll('#texteAnnee article p:first-of-type').length-1].innerText;
let getArticleContainer = document.getElementById('texteAnnee');
let articleText;

//Event sur le bouton parcours
getBtnParcours.addEventListener('click', function(e){
    e.preventDefault();
    let indexLastAnnee = parcoursArray.findIndex(parcours => parcours.date == getLastAnnee);
    if(parcoursArray[indexLastAnnee+1] !== undefined){
        articleText = document.createElement('article');
        articleText.innerHTML =`<p>${parcoursArray[indexLastAnnee+1].date}</p>` + parcoursArray[indexLastAnnee+1].name + `</h3><p id="periode">${parcoursArray[indexLastAnnee+1].periode}</p>`+ `<p>${parcoursArray[indexLastAnnee+1].info}</p>`;
        getArticleContainer.appendChild(articleText);
        //On ajuste la page pour que le bouton ne bouge pas et que tout le contenu soit affiché
        getBtnParcours.scrollIntoView(false,{behavior:'auto',inline:'end'})
        if(parcoursArray[indexLastAnnee+2] === undefined){
            getBtnParcours.innerText = 'Voir moins';
        }
    }else{
        //Si on a parcouru tout les éléments on affiche l'élement afficher de base;
        getArticleContainer.innerHTML = '<article><p>2017</p><h3><span><</span> BAC S / spécialité mathématiques <span>></span></h3><p id="periode">Juillet 2017</p><p>Obtention de mon BAC. J’avais choisis la filière S, car mon esprit logique est mon point fort. De plus je prenais un réel plaisir à faire des mathématiques.</p></article>';
        getBtnParcours.innerText = 'Voir plus';
        //Puis on rescroll jusqu'au debut
        document.getElementById('parcours').scrollIntoView({behavior:'auto'});
    }
    //On actualise la dernière année affiché
    getLastAnnee = document.querySelectorAll('#texteAnnee article p:first-of-type')[document.querySelectorAll('#texteAnnee article p:first-of-type').length-1].innerText;
});

//Partie compétence
let getArrowLeft = document.getElementsByClassName('fa-chevron-circle-left')[0];
let getArrowRight = document.getElementsByClassName('fa-chevron-circle-right')[0];
let getAllCompetence = document.querySelectorAll('#competencesContainer img');
let displayCompetenceText = document.getElementById('nomCompetence');

//Changement compétence
getArrowLeft.addEventListener('click',function(){
    for(image in getAllCompetence){
        let id = getAllCompetence[image].id;
        switch (id){
            case 'competence1':
                getAllCompetence[image].id = 'competence5';
                break;
            case 'competence2':
                getAllCompetence[image].id = 'competence1';
                break;
            case 'competence3':
                getAllCompetence[image].id = 'competence2';
                break;
            case 'competence4':
                getAllCompetence[image].id = 'competence3';
                displayCompetenceText.innerText = getAllCompetence[image].alt;
                break;
            case 'competence5':
                getAllCompetence[image].id = 'competence4';
                break;
            default:
        }
    }
})

getArrowRight.addEventListener('click',function(){
    for(image in getAllCompetence){
        let id = getAllCompetence[image].id;
        switch (id){
            case 'competence1':
                getAllCompetence[image].id = 'competence2';
                break;
            case 'competence2':
                getAllCompetence[image].id = 'competence3';
                displayCompetenceText.innerText = getAllCompetence[image].alt;
                break;
            case 'competence3':
                getAllCompetence[image].id = 'competence4';
                break;
            case 'competence4':
                getAllCompetence[image].id = 'competence5';
                break;
            case 'competence5':
                getAllCompetence[image].id = 'competence1';

                break;
            default:
        }
    }
});

//Partie Projet
 let getBtnProjet = document.getElementById('btnProjet');
 let allComp;
 let getProjetContainer = document.getElementById('projetContainer');

 //Ecoute sur le bouton voir plus ou moins
 getBtnProjet.addEventListener('click',function(e){
    e.preventDefault();
    //Si on est dans le cas de voir plus
    if(getBtnProjet.innerText === 'Voir plus'){
        //On crée un nouvel article pour contenir le projet pour chaque projet du tableau de stockage
        for(projet in projetArray){
            let articleProjet = document.createElement('article');
            allComp = '';
            for(competence in projetArray[projet].competence){
                allComp += `<li>${projetArray[projet].competence[competence]}</li>`;
            }
            articleProjet.innerHTML = `<div class="filtreBleu"></div><div id="textProjet"><h4>${projetArray[projet].name}</h4><p>${projetArray[projet].desc}</p><ul>${allComp}</ul></div>`;
            articleProjet.style.backgroundImage = projetArray[projet].image;
            getProjetContainer.appendChild(articleProjet);
        }
        getBtnProjet.innerText = 'Voir moins';
    }else{
        //Sinon on supprime les enfants depuis l'indice 3 des enfants du container des projets ( donc à partir du 4eme)
        //On stock la longueur initiale du tableau d'enfant car elle sera amené à changer
        let nbrEnfant = getProjetContainer.children.length;
        //On parcours le tableau à partir de la fin pour que les indices ne changent pas
        for(let i = nbrEnfant-1;i>2;i--){
            getProjetContainer.removeChild(getProjetContainer.children[i]);
        }
        getBtnProjet.innerText = 'Voir plus';
    }
 });
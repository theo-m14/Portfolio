let parcoursArray = [
    {'name' : '<h3><span><</span> E.Leclerc Limoges <span>></span></h3>', 'date':'2018', 'periode' : 'Février 2018 - Mai 2018', 'info' : 'Après une erreur d’orientation je me mets à travailler dans un E.Leclerc tout en reprenant la programmation en autodidacte avec le language C, bien décidé à en faire mon métier.'},
    {'name' : '<h3><span><</span> Première année de licence informatique <span>></span></h3>', 'date':'2019', 'periode' : 'Septembre 2018 - Juillet 2019', 'info' : 'Je réussis cette première année dans laquelle j’ai utilisé le language processing. J’ai aussi réalisé un projet de groupe sur l’algorithme Ford-Bellman ( recherche du chemin le plus court dans un grapge pondéré et orienté ).'},
    {'name' : '<h3><span><</span> Début de deuxième année et formation OpenClassrooms <span>></span></h3>', 'date':'2020', 'periode' : 'Septembre 2018 - Juillet 2019', 'info' : 'Changement d’université, début de deuxième année, je ne me sens pas à ma place, je ne suis pas épanoui, il n’y a pas assez de pratique pour moi. Une opportunité s’offre à moi, je tente ma chance et je commence une formation avec OpenClassrooms, intitulé Prep’FullStack. Je complète la formation et pour continuer je dois trouver une alternance, en mars 2020.. Période de confinement. Mes recherches sont vaines.'},
    {'name' : '<h3><span><</span> E.Leclerc, nouveau choix d’orientation <span>></span></h3>', 'date':'2021', 'periode' : 'Octobre 2020 - Avril 2021', 'info' : 'Étant autonome je retourne travailler dans la grande distribution par nécessité. Je continue à chercher une solution d’orientation.'},
    {'name' : '<h3><span><</span> Talis Buisness School <span>></span></h3>', 'date':'2022', 'periode' : 'Octobre 2021 - Juillet 2022', 'info' : 'Formation professionnel de Developpeur Web et Web Mobile. À la fin de cette année je serais à l’écoute d’opportunité, comme une embauche direct ou encore une alternance pour monter en compétence. Si aucune de ces opportunités ne se présente je me lancerais en freelance.'}
]

let getBtnParcours = document.getElementById('btnParcours');
let getLastAnnee = document.querySelectorAll('#texteAnnee article p:first-of-type')[document.querySelectorAll('#texteAnnee article p:first-of-type').length-1].innerText;
let getArticleContainer = document.getElementById('texteAnnee');
let articleText;

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
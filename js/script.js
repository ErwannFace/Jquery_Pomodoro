// https://www.zirolis.com/tuto-u/R%C3%A9aliser%20un%20chronom%C3%A8tre%20avec%20HTML%20CSS%20et%20JQuery-49


//1. class 'time' : déclencher un compte à rebours de 25 minutes par un clic sur id "play", .console.log() ? 
// choisir un temps = 25 minutes; 1500secondes !
//mettre sur pause avec id "pause" et arreter avec id "stop". 
// créer un RaZ pour remettre au début.




//récuperer la valeur écrite dans input 'doing' pour l'envoyer dans "done" et la barrer.

//SI activité finie
// SI activté non finie : créer nouvelle fenetre pour utilisateur : 'DOING AGAIN'
// pour cette fenetre : donner le choix à l'utilisateur du temps. 
// 5 / 10 ou 15 minutes) avec de simple boutons poussoir pour une "ergonomie" plus simple



var m = 0; // Minute
var s = 8; // Seconde
 
var temps; // Contiendra l'exécution de notre code 
var bo =  true; // Permettra de contrôler l'exécution du code

function affichage(n00b)
{
    if(n00b < 10) // si le chiffre indiqué est inférieurs à dix ...
    {
        n00b = "0" + n00b; // .. on ajoute un zéro devant avant affichage
    }
     
    return n00b;
}

$("#play").click(function()
{
    if(bo) // On controle bo pour savoir si un autre Intervalle est lancé
    {
        temps = setInterval(function()
        {
            s--;
            if(s < 0)
            {
                m--;
                s = 59;
            }
                      
           //ensuite repartir de 5 minutes
           	if(m == 0 && s == 0){
           	    alert('?');
                /*m=5;*/
                s=5;
            }
            
// repart en boucle sur temps pause ...
            /*  

                if (s = 0){
                alert ('stop pause');
                m=0;
                s = 0;
            }*/
        




            $("#s").html(affichage(s));
            $("#m").html(affichage(m));           
           }, 1000); 
        
                // On affecte false à bo pour empécher un second Intervalle de se lancer
        bo = false; 
    }
});

$("#pause", temps).click(function()
{
     
    clearInterval(temps); // On stop l'intervalle lancé
     
       // On affiche les variables dans les conteneur dédié
    $("#s").html(affichage(s));
    $("#m").html(affichage(m));
     
       // Affecter true a bo pour indiquer qu'il n'y a plus d'Intervalle actif
    bo = true;
});


$("#stop").click(function()
{
     
    s = 8;
    m = 0;
     
    $("#s").html("00");
    $("#m").html("00");
         
    if(bo == false)
    {
    clearInterval(temps);
    }
     
    bo = true;
     
});

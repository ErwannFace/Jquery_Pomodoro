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
var s = 10; // Seconde
 
var temps; // Contiendra l'exécution de notre code 
var bo =  true; // Permettra de contrôler l'exécution du code

function affichage(nb)
{
    if(nb < 10) // si le chiffre indiqué est inférieurs à dix ...
    {
        nb = "0" + nb; // .. on ajoute un zéro devant avant affichage
    }
     
    return nb;
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
             
           //{ //si chrono = 0 créer une alerte sonore
           	//$(this).effect("pulsate", { times:3 }, 2000);     
            //$('#ex1').add('h2'); //migrer info "doing" dans "done"

           //ensuite augmenter temps jusu'à 5 minutes
           	if(m == 0 && s == 0){
           	s ++;
				if (s > 59) {
				m = m+1;
				}
			//m <= 5; 
            //	}
        }
             
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
     
    s = 10;
    m = 0;
     
    $("#s").html("00");
    $("#m").html("00");
         
    if(bo == false)
    {
    clearInterval(temps);
    }
     
    bo = true;
     
});

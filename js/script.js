// https://www.zirolis.com/tuto-u/R%C3%A9aliser%20un%20chronom%C3%A8tre%20avec%20HTML%20CSS%20et%20JQuery-49

$( "play").click(function() {
  $( this ).slideUp();
});

$( "#pause").click(function() {
  $( this ).bounce();
});

//$('time').fadeIn().delay(150000).fadeOut();


	

//$( "p" ).click();



//1. class 'time' : déclencher un compte à rebours de 25 minutes par un clic sur id "play", .console.log() ? 
// choisir un temps = 25 minutes; 1500secondes !
//mettre sur pause avec id "pause" et arreter avec id "stop". 
// créer un RaZ pour remettre au début.




//récuperer la valeur écrite dans input 'doing' pour l'envoyer dans "done" et la barrer.

//SI activité finie
// SI activté non finie : créer nouvelle fenetre pour utilisateur : 'DOING AGAIN'
// pour cette fenetre : donner le choix à l'utilisateur du temps. 
// 5 / 10 ou 15 minutes) avec de simple boutons poussoir pour une "ergonomie" plus simple

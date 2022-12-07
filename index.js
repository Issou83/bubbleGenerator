const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span"); //Nous créont un élément span
  bubble.classList.add("bubble"); //Aprés avoir créé une class ".bubble" dans le css, nous l'injecton dans la span créé précédament
  document.body.appendChild(bubble);

  /*créont un random poour la taille des bulle , 
    en tenons compte du fais que nous voulons que ces bulles fasse entre 200px et 300px
    On ajoute donc au rendom *200 et + 100, car par defaut le redom est inclut entre 0 et 1 */

  //Création de la variable pour lataille des bulles en random

  const size = Math.random() * 200 + 100 + "px";
  //Nous pouvons maintenant injecter le style à class
  bubble.style.height = size;
  bubble.style.width = size;

  //Pour un positionnement aléatoir
  bubble.style.top = Math.random() * 100 + 50 + "%"; //en poucentage-------le +50 nous permet d'influer sur l'apparition de la bulle sur la moitier basse de  la fenetre
  bubble.style.left = Math.random() * 100 + "%"; //en poucentage

  //Variable qui nous permet d'influer sur l'apparition en left en positif ou en negatif 1 fois sur 2
  const plusMinus = Math.random() > 0.5 ? 1 : -1; //Ceci est une Ternaire, elle nous permet de tester une condition: si sup à 0.5 alors renvoi -1 ou 1

  //Nous cherchons a influer sur la variable css @keyframes , sur le mouvement --x
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  //Integrer le tout dans une fontion afin de la manipuler pour la création de plusieurs bulles

  // Au clic: disparition des bulle

  bubble.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
    bubble.remove();
  });

  //Comment supprimer les bulles au bout d'un certain temps
  setTimeout(() => {
    bubble.remove();
  }, 8000);
}; //Fin  de la variable "bubbleMaker"
//Creation de l'intervale d'appartion des bulles
setInterval(bubbleMaker, 1000);

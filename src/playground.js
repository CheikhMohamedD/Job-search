//revision de la Map methode en JavaScript
/**la methode Map ici nous a permis de parcourir
 * chaque chiffre du tableau numbers et d'indiquer
 *  que pour la valeur square a chaque nombre
 * rencontre nous le multiplierons par lui meme*/
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => number * number);

console.log(
  "la series de chiffres est: ",
  numbers,
  ". Leur carre est: ",
  squares
);

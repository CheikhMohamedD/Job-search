// Jest nous permet via le regex d'avoir des fichiers de test unitaire avec l'extension .test.js comme c'est le cas avec playground

//describe() est comme un chapitre qui introduit ce qu'on est sur le point de tester
// suivons la logique de test :
/* nous allons tester basic math*/
describe("basic math", () => {
  /* qui doit ajouter 2 chiffres*/
  it("add two numbers", () => {
    /*tel que 1+1=2 [exemple]*/
    expect(1 + 1).toBe(2);
    //Pour lancer le test on peut remarquer dans le fichier package.json qu'il ya dans debug la commande test:unit consacre aux test unitaire via "npm run"
    /**resultat du premier test :
     *  PASS  tests/unit/playground.test.js
      basic math
        √ add two numbers (2 ms)

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        2.62 s
    */
  });

  //deuxieme test
  it("substract two numbers", () => {
    expect(10 - 7).toBe(3);
    // fait expres pour test l'erreur
    expect(10 - 3).toBe(6);
  });
});

//test playground.js : fonction EvenOrOdd
import { evenOrOdd } from "@/playground";
describe("evenOrOdd", () => {
  describe("when the number is even", () => {
    it("indicates number is even", () => {
      expect(evenOrOdd(4)).toBe("Even");
    });
  });
  describe("when the number is Odd", () => {
    it("indicate the number is Odd", () => {
      expect(evenOrOdd(3)).toBe("Odd");
    });
  });
});

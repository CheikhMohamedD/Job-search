import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

const wrapper = mount(MainNav); //utilisation de MainNav

describe("MainNav", () => {
  it("display the company name", () => {
    //optimisation du test avec la recherche de tout text dans la balise contenant l'attribut data-test='main-nav-link-test'
    expect(wrapper.find("[data-test='main-nav-link-item']").text()).toMatch(
      "SenClient"
    );
  });
  it("displays menu items for navigation", () => {
    //findAll("li") est pour localiser les balises et ("[...]") s'utilise quand on veut localiser les attributs dans la balise.
    // const navigationMenuItems = wrapper.findAll("li"); // Rechercher tous les li se trouvant dans le composant MainNav.
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']" //Il est bien d'utiliser l'attribut a la place de la balise elle meme pour eviter qu'il ait des erreurs lorsqu'un autre devs va modifier la balise en question
    ); // Rechercher tous les li se trouvant dans le composant MainNav.
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text()); //apres avoir trouver les <li> denicher chaque texte se trouvant dans les listes via map avec item.text()
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at SenClient",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});

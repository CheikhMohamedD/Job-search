import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

const wrapper = mount(MainNav); //utilisation de MainNav

describe("MainNav", () => {
  it("display the company name", async () => {
    await wrapper.setData({
      company: "CompZone",
    });
    expect(wrapper.text()).toMatch("CompZone");
  });
  it("displays menu items for navigation", () => {
    const navigationMenuItems = wrapper.findAll("li"); // Rechercher tous les li se trouvant dans le composant MainNav.
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text()); //apres avoir trouver les <li> denicher chaque texte se trouvant dans les listes via map avec item.text()
    console.log(navigationMenuTexts);
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

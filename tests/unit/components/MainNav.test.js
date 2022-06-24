import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("display the company name", () => {
    const wrapper = mount(MainNav, {
      data() {
        return {
          company: "SaClient",
        };
      },
    });
    expect(wrapper.text()).toMatch("SenClient");
  });
});

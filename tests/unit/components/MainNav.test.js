import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("display the company name", async () => {
    const wrapper = mount(MainNav);
    await wrapper.setData({
      company: "SaClient",
    });
    expect(wrapper.text()).toMatch("SaClient");
  });
});

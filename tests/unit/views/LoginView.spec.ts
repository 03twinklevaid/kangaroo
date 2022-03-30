import { shallowMount } from "@vue/test-utils";
import LoginView from "@/views/LoginView.vue";

describe("LoginView.vue", () => {
  it("renders LoginView", () => {
    const wrapper = shallowMount(LoginView);
    expect(wrapper.exists()).toBe(true);
  });
});

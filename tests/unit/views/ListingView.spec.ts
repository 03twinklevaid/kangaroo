import { shallowMount } from "@vue/test-utils";
import ListingView from "@/views/ListingView.vue";

describe("ListingView.vue", () => {
  it("renders ListingView", () => {
    const wrapper = shallowMount(ListingView);
    expect(wrapper.exists()).toBe(true);
  });
});

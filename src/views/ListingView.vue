<template>
  <k-footer>
    <template v-slot>
      <k-header
        :heading="headings.timeSlotsHeading"
        :totalOrders="totalOrders"
      ></k-header>
      <a-collapse v-model:activeKey="activeKey">
        <a-collapse-panel
          :show-arrow="false"
          :key="item.id"
          v-for="item in data"
        >
          <template #header>
            <div class="flex">
              <a-typography-text strong type="orange">{{
                item.time
              }}</a-typography-text>
              <a-typography-text strong type="orange">{{
                item.totalCount
              }}</a-typography-text>
            </div>
          </template>
          <div
            class="order-item"
            v-for="order in item.orders"
            :key="order.title"
          >
            <div class="flex py-10">
              <a-typography-text strong>{{ order.title }}</a-typography-text>
              <a-badge
                :count="order.count"
                :number-style="{
                  backgroundColor: '#b1b1b1',
                  color: '#fff',
                  fontWeight: 'bold',
                }"
              />
            </div>
          </div>
        </a-collapse-panel>
      </a-collapse>
    </template>
    <template v-slot:delivery>
      <k-header :heading="headings.deliveryHeading"></k-header>
      {{ headings.deliveryHeading }}
    </template>
    <template v-slot:support>
      <k-header :heading="headings.supportHeading"></k-header>
      {{ headings.supportHeading }}
    </template>
    <template v-slot:settings>
      <k-header :heading="headings.settingsHeading"></k-header>
      {{ headings.settingsHeading }}
    </template>
  </k-footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import KFooter from "@/components/Footer.vue";
import KHeader from "@/components/Header.vue";
import Typography from "ant-design-vue/lib/typography/Typography";
import { Badge } from "ant-design-vue";

interface DataItem {
  id: string;
  time: string;
  totalCount: number;
  orders: Array<{
    title: string;
    count: number;
  }>;
}

interface Headings {
  timeSlotsHeading: string;
  deliveryHeading: string;
  supportHeading: string;
  settingsHeading: string;
}

const headings: Headings = {
  timeSlotsHeading: "My Orders",
  deliveryHeading: "My Deliveries",
  supportHeading: "Support",
  settingsHeading: "Settings",
};

const data: DataItem[] = [
  {
    id: "1",
    time: "10:15 AM",
    totalCount: 2,
    orders: [
      { title: "Subway1", count: 1 },
      { title: "KFC1", count: 1 },
    ],
  },
  {
    id: "2",
    time: "10:16 AM",
    totalCount: 1,
    orders: [{ title: "Subway2", count: 1 }],
  },
  {
    id: "3",
    time: "10:17 AM",
    totalCount: 4,
    orders: [
      { title: "Subway3", count: 1 },
      { title: "KFC3", count: 1 },
      { title: "coke", count: 1 },
      { title: "desert", count: 1 },
    ],
  },
  {
    id: "4",
    time: "10:18 AM",
    totalCount: 3,
    orders: [
      { title: "Subway4", count: 1 },
      { title: "KFC4", count: 1 },
      { title: "coke2", count: 1 },
    ],
  },
];

const totalOrders = (data: DataItem[]) => {
  const count = data.reduce((acc, item) => {
    return acc + item.totalCount;
  }, 0);
  return count;
};

export default defineComponent({
  name: "ListingView",
  components: {
    KFooter,
    KHeader,
    ATypographyText: Typography.Text,
    ABadge: Badge,
  },

  setup() {
    const activeKey = ref(["1"]);

    return {
      data,
      headings,
      activeKey,
      totalOrders: totalOrders(data),
    };
  },
});
</script>
<style scoped lang="scss">
.order-item {
  border-bottom: 1px solid #e9e9e9;
  &:last-child {
    border: none;
  }
}
.flex {
  display: flex;
  justify-content: space-between;
}
</style>

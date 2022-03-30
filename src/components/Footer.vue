<template>
  <a-tabs
    v-model:activeKey="activeKey"
    tab-position="bottom"
    tab-bar-gutter="5px"
    :animated="false"
  >
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <pie-chart-outlined />
          Timeslots
        </span>
      </template>
      <slot></slot>
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
        <span>
          <thunderbolt-outlined />
          My Deliveries
        </span>
      </template>
      <slot name="delivery"></slot>
    </a-tab-pane>
    <a-tab-pane key="3">
      <template #tab>
        <span>
          <info-circle-outlined />
          Support
        </span>
      </template>
      <slot name="support"></slot>
    </a-tab-pane>
    <a-tab-pane key="4">
      <template #tab>
        <span>
          <setting-outlined />
          Settings
        </span>
      </template>
      <slot name="settings"></slot>
    </a-tab-pane>
  </a-tabs>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Tabs, TabPane } from "ant-design-vue";

import {
  InfoCircleOutlined,
  ThunderboltOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
  name: "KFooter",
  components: {
    ATabs: Tabs,
    ATabPane: TabPane,
    PieChartOutlined,
    ThunderboltOutlined,
    InfoCircleOutlined,
    SettingOutlined,
  },
  props: {},
  setup() {
    return {
      activeKey: ref("1"),
    };
  },
});
</script>
<style scoped lang="scss">
.ant-tabs {
  .ant-tabs-nav {
    .ant-tabs-tab {
      & > span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .anticon {
        font-size: 22px;
        margin: 0;
      }
    }
  }
}
</style>

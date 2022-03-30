<template>
  <div class="header">
    <a-typography-text type="white">{{ heading }}</a-typography-text>
    <a-badge
      :count="totalOrders"
      :number-style="{
        backgroundColor: '#fff',
        color: '#f1771a',
        fontWeight: 'bold',
      }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Typography from "ant-design-vue/lib/typography/Typography";

export default defineComponent({
  name: "KHeader",
  components: {
    ATypographyText: Typography.Text,
  },
  props: {
    heading: String,
    totalOrders: Number,
  },
});
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f1771a;
}
</style>

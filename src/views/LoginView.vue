<template>
  <div class="login">
    <div class="login__banner">
      <img src="@/assets/banner.png" />
    </div>
    <div class="login__form">
      <a-row justify="center" :gutter="[0, 20]">
        <a-col :xs="22" :md="14">
          <a-input
            type="email"
            v-model:value="email"
            placeholder="Email Address"
          >
            <template #prefix>
              <mail-outlined type="user" />
            </template>
          </a-input>
        </a-col>

        <a-col :xs="22" :md="14">
          <a-input
            type="password"
            v-model:value="password"
            placeholder="Password"
          >
            <template #prefix>
              <lock-outlined type="user" />
            </template>
          </a-input>
        </a-col>

        <a-col :xs="22" :md="14">
          <a-button
            type="white"
            @click="handleLogin"
            block
            class="login__submit-button"
            >Login</a-button
          >
        </a-col>

        <a-col :xs="22" :md="14">
          <a-typography-text type="white" underline>
            Forgot your password?
          </a-typography-text>
        </a-col>

        <a-col :xs="22" :md="14">
          <a-typography-text type="white"> No account? </a-typography-text>
          <a-typography-text type="white" underline>
            Register
          </a-typography-text>
          <a-typography-text type="white"> or </a-typography-text>
          <a-typography-text type="white" underline>
            Select location
          </a-typography-text>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MailOutlined, LockOutlined } from "@ant-design/icons-vue";
import { Input, Button } from "ant-design-vue";
import { Row, Col } from "ant-design-vue/lib/grid";
import Typography from "ant-design-vue/lib/typography/Typography";

export default defineComponent({
  name: "LoginView",
  components: {
    MailOutlined,
    LockOutlined,
    AInput: Input,
    AButton: Button,
    ACol: Col,
    ARow: Row,
    ATypographyText: Typography.Text,
  },

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    handleLogin() {
      if (this.email === "admin" && this.password === "password") {
        this.$router.push({
          name: "listing",
        });
        localStorage.setItem("isAuthenticated", "true");
      }
    },
  },
});
</script>
<style scoped lang="scss">
.login {
  background-color: #f1771a;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__banner {
    img {
      width: 80%;
    }
  }

  &__form {
    width: 100%;
  }

  &__submit-button {
    margin-top: 10px;
  }
}
</style>

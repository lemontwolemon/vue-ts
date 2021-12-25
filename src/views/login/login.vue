<template>
  <div class="login">
    <login-panel></login-panel>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LoginPanel from './components/login-panel'
export default defineComponent({
  name: 'login',
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: no-repeat url('../../assets/image/th2.jpg');
}
</style>

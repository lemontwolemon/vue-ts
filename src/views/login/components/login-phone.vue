<template>
  <div class="login-phone">
    <el-form label-width="80px" :model="phone" :rules="rules">
      <el-form-item label="手机号：" prop="num">
        <div style="display: flex">
          <el-input v-model="phone.num" />
        </div>
      </el-form-item>
      <el-form-item label="验证码：" prop="code">
        <div style="display: flex">
          <el-input v-model="phone.code" />
          <el-button type="primary" style="margin-left: 8px"
            >发送验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { rules } from '@/views/login/config/phone-config'

export default defineComponent({
  name: 'login-phone',
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped></style>

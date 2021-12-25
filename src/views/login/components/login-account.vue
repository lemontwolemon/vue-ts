<template>
  <div class="login-account">
    <el-form label-width="80px" :model="account" :rules="rules" ref="formRef">
      <el-form-item label="账号：" prop="name">
        <div style="display: flex">
          <el-input v-model="account.name" />
        </div>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <div style="display: flex">
          <el-input show-password v-model="account.password" />
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '@/views/login/config/account-config'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'login-account',
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.get('name') ?? '',
      password: localCache.get('password') ?? ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            localCache.set('name', account.name)
            localCache.set('password', account.password)
          } else {
            localCache.delete('name')
            localCache.delete('password')
          }
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less"></style>

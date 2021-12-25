<template>
  <div class="user">
    <div class="search">
      <qjg-from :form-items="formItem" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QjgFrom, { IFormItem } from '@/base-ui/form'

export default defineComponent({
  name: 'user',
  components: {
    QjgFrom
  },
  setup() {
    const formItem: IFormItem[] = [
      {
        label: '用户名',
        type: 'input',
        placeholder: '请输入用户名'
      },
      {
        label: '密码',
        type: 'password',
        placeholder: '请输入密码'
      },
      {
        label: '喜欢的运动',
        type: 'select',
        placeholder: '请选择喜欢的运动',
        options: [
          { title: '篮球', value: 'basketball' },
          { title: '足球', value: 'football ' }
        ]
      },
      {
        label: '创建时间',
        type: 'datepicker',
        otherOptions: {
          startPlaceholder: '开始时间',
          endPlaceholder: '结束时间',
          type: 'daterange'
        }
      }
    ]
    return {
      formItem
    }
  }
})
</script>

<style scoped></style>

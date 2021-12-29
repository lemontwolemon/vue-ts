<template>
  <div class="user">
    <qjg-from v-bind="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QjgFrom from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    QjgFrom
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>

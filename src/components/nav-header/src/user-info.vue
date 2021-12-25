<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="small"
          src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        ></el-avatar>
        <span style="margin-left: 5px">{{ name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { ArrowDown } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
    ArrowDown
  },
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userinfo.name)
    return {
      name
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  display: flex;
  cursor: pointer;
  align-items: center;
}
</style>

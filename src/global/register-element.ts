import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElAside,
  ElMain,
  ElHeader,
  ElContainer,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElCol,
  ElRow,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
} from 'element-plus/lib/components'

const components = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink,
  ElAside,
  ElMain,
  ElHeader,
  ElContainer,
  ElMenu,
  ElSubMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}

import { App } from 'vue'
import RegisterElement from './register-element'

export function registerApp(app: App): void {
  // RegisterElement(app)
  app.use(RegisterElement)
}

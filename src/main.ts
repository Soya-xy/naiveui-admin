import { createApp } from 'vue'
import App from './App.vue'
import '~/assets'

const create = createApp(App)

Object.values(import.meta.glob('./modules/*.ts', { eager: true }))
  .forEach((i: any) => i.install?.(create))

create.mount('#app')

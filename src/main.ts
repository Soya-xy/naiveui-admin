import { createApp } from 'vue'

// import Previewer from 'virtual:vue-component-preview'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

// https://github.com/antfu/vite-ssg
const create = createApp(App)

Object.values(import.meta.glob('./modules/*.ts', { eager: true }))
  .forEach((i: any) => i.install?.(create))

create.mount('#app')

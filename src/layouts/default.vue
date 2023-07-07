<script setup lang="ts">
import { darkTheme } from 'naive-ui'

const theme = ref(useDark().value ? darkTheme : undefined)
console.log('🚀 ~ file: default.vue:5 ~ theme:', theme)
</script>

<template>
  <n-config-provider :theme="theme" h-full>
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </n-config-provider>
</template>

<script setup lang="ts">
const theme = useDark()
console.log('🚀 ~ file: default.vue:3 ~ theme:', theme)
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="{ common: { fontWeightStrong: '600' } }">
    <RouterView />
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'

// import { darkTheme } from 'naive-ui'
// const theme = ref(useDark().value ? darkTheme : undefined)

const theme = ref(useDark().value ? undefined : undefined)
const config = useConfigStore()
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: config.theme.defaultColor,
  },
}
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides" h-full>
    <NaiveProvider>
      <RouterView />
    </NaiveProvider>
  </n-config-provider>
</template>

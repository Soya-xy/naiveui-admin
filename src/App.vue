<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme } from 'naive-ui'
import { storeToRefs } from 'pinia'

const config = useConfigStore()
const { theme: t } = storeToRefs(config)
const theme = computed(() => (t.value.isDark ? darkTheme : null))
watch(() => theme.value, () => {
  console.log(theme.value)
}, {
  immediate: true,
  deep: true,
})
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: config.theme.defaultColor,
    primaryColorPressed: config.theme.defaultColor,
    primaryColorHover: config.theme.hoverColor,
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

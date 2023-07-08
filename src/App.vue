<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { darkTheme } from 'naive-ui'

const dark = useDark()
const config = useConfigStore()

const theme = computed(() => (dark.value ? darkTheme : null))
// const theme = ref(useDark().value ? undefined : undefined)
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

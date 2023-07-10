<script setup lang='ts'>
const { config, theme } = useConfigStore()
function toggleTheme() {
  theme.isDark = !theme.isDark
  toggleDark()
}
</script>

<template>
  <div mx-4 w-full>
    <n-space justify="space-between">
      <n-icon
        size="30" hover="text-blue-600 cursor-pointer" :class="{
          'i-mdi:menu-open': !config.collapsedSide,
          'i-mdi:menu-close': config.collapsedSide,
        }"
        @click="config.collapsedSide = !config.collapsedSide"
      />
      <n-icon
        size="30" hover="text-blue-600 cursor-pointer" :class="{
          'i-carbon:moon': theme.isDark,
          'i-carbon:sun': !theme.isDark,
        }"
        @click="toggleTheme"
      />
    </n-space>
  </div>
</template>

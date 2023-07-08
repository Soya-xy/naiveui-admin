<script setup lang='ts'>
const { config } = useConfigStore()
</script>

<template>
  <div mx-4>
    <n-icon
      size="30" hover="text-blue-600 cursor-pointer" :class="{
        'i-mdi:menu-open': !config.collapsedSide,
        'i-mdi:menu-close': config.collapsedSide,
      }"
      @click="config.collapsedSide = !config.collapsedSide"
    />
  </div>
</template>

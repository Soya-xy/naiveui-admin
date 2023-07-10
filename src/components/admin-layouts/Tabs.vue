<script setup lang='ts'>
import { storeToRefs } from 'pinia'

const dark = useDark()
const { layout } = useConfigStore()
const route = useRoute()
const tab = useTabsStore()
const { tabs } = storeToRefs(tab)
watch(
  () => route.fullPath,
  () => {
    tab.addTab(route)
  },
)
const name = computed(() => route.fullPath)
</script>

<template>
  <n-tabs
    v-model:value="name" type="card" closable :tab-style="{
      'height': layout.tabHeight,
      'min-width': '80px',
      'background-color': dark ? 'auto' : '#fff',
    }"
  >
    <n-tab v-for="panel in tabs" :key="panel.fullPath" :name="panel.fullPath">
      {{ panel.meta.title }}
    </n-tab>
  </n-tabs>
</template>

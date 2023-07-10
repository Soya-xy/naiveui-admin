<script setup lang='ts'>
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()

const { layout, theme } = useConfigStore()

const tab = useTabsStore()
const { tabs } = storeToRefs(tab)

watch(
  () => route.fullPath,
  () => {
    tab.addTab(route)
  },
)
const name = computed(() => route.fullPath)

function clickTab(fullPath: string) {
  if (fullPath === name.value)
    return

  router.push(fullPath)
}
</script>

<template>
  <n-tabs
    v-model:value="name" type="card" closable :tab-style="{
      'height': layout.tabHeight,
      'min-width': '80px',
      'background-color': theme.isDark ? 'auto' : '#fff',
    }"
    @update-value="clickTab"
  >
    <n-tab v-for="panel in tabs" :key="panel.fullPath" :name="panel.fullPath">
      {{ panel.meta.title }}
    </n-tab>
  </n-tabs>
</template>

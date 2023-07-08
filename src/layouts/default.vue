<script setup lang="ts">
const { layout } = useConfigStore()

const panels = ref(['1, 2, 31, 2, 31, 2, 31, 2, 3ffff', 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
const name = ref(1)

const height = computed(() => {
  return `calc(100vh - ${layout.headerHeight} - ${layout.footerHeight} - ${layout.tabHeight})`
})
</script>

<template>
  <n-layout
    :native-scrollbar="false"
    :scrollbar-props="{
      size: 1,
      trigger: 'none',
    }"
  >
    <n-layout has-sider>
      <n-layout-sider
        bordered
        :width="220"
        :collapsed-width="60"
        :native-scrollbar="false"
      >
        <AdminLayoutsSide :side-width="layout.sideWidth" />
      </n-layout-sider>
      <n-layout>
        <n-layout-header :style="{ height: layout.headerHeight }" bordered>
          颐和园路
        </n-layout-header>
        <n-tabs
          v-model:value="name"
          type="card"
          closable
          tab-style="min-width: 80px;"
        >
          <n-tab
            v-for="panel in panels"
            :key="panel"
            :tab="panel.toString()"
            :name="panel"
            :style="{
              height: layout.tabHeight,
            }"
          />
        </n-tabs>
        <n-layout-content
          :style="{
            'max-height': height,
            height,
          }"
          :native-scrollbar="false"
        >
          <RouterView />
        </n-layout-content>
        <n-layout-footer
          bordered
          :style="{
            height: layout.footerHeight,
          }"
        >
          成府路
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

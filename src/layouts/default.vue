<script setup lang="ts">
const { layout, config } = useConfigStore()
const dark = useDark()
const panels = ref(['1, 2, 31, 2, 31, 2, 31, 2, 3ffff', 4, 5, 6, 7, 4, 5, 6, 7, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
const name = ref(1)

const height = computed(() => {
  return `calc(100vh - ${layout.headerHeight} - ${layout.footerHeight} - ${layout.tabHeight})`
})
</script>

<template>
  <n-layout
    :native-scrollbar="false" :scrollbar-props="{
      size: 1,
      trigger: 'none',
    }"
  >
    <n-layout has-sider>
      <n-layout-sider
        bordered :width="layout.sideWidth" :collapsed-width="60" :native-scrollbar="false"
        collapse-mode="width" :collapsed="config.collapsedSide"
      >
        <AdminLayoutsSide
          :side-width="config.collapsedSide ? 60 : layout.sideWidth"
          :is-collapsed="config.collapsedSide"
        />
      </n-layout-sider>
      <n-layout>
        <n-layout-header :style="{ height: layout.headerHeight }" flex-y-center>
          <AdminLayoutsHeader />
        </n-layout-header>
        <n-tabs
          v-model:value="name" type="card" closable :tab-style="{
            'height': layout.tabHeight,
            'min-width': '80px',
            'background-color': dark ? 'auto' : '#fff',
          }"
        >
          <n-tab v-for="panel in panels" :key="panel" :tab="panel.toString()" :name="panel" />
        </n-tabs>
        <n-layout-content
          :style="{
            'max-height': height,
            height,
          }" :native-scrollbar="false"
        >
          <Suspense>
            <router-view v-slot="{ Component, route }">
              <transition name="fade-slide" mode="out-in" :appear="true">
                <keep-alive>
                  <component
                    :is="Component"
                    :key="route.path"
                    class="flex-grow bg-#f6f9f8 p-16px transition duration-300 ease-in-out dark:bg-#101014"
                  />
                </keep-alive>
              </transition>
            </router-view>
            <template #fallback>
              <div class="absolute-center">
                <n-spin :show="true" size="large" />
              </div>
            </template>
          </Suspense>
        </n-layout-content>
        <n-layout-footer
          bordered :style="{
            height: layout.footerHeight,
          }"
        >
          成府路
        </n-layout-footer>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

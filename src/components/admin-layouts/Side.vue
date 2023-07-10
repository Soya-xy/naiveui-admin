<script setup lang='ts'>
import type { MenuGroupOption, MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import { RouterLink } from 'vue-router'
import type { SideProps } from './types'

const props = withDefaults(defineProps<SideProps>(), {
  isCollapsed: false,
  sideWidth: 220,
  headerHeight: '4rem',
})
const route = useRoute()
const activeKey = computed(() => (route.name as string))

function renderIcon(icon: string) {
  return () => h(NIcon, {
    class: icon,
  })
}

const menuOptions = ref<Array<MenuOption | MenuGroupOption>>([
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'index',

          },
        },
        { default: () => 'APP管理' },
      ),
    icon: renderIcon('i-mdi:android-head'),
    key: 'index',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'login',
          },
        },
        { default: () => '登录' },
      ),
    icon: renderIcon('i-mdi:android-head'),
    key: 'login',
  },
])
</script>

<template>
  <div
    :style="{
      width: `${props.sideWidth}px`,
    }"
  >
    <div
      class="bb-border flex items-center justify-center" :style="{
        height: props.headerHeight,
      }"
    >
      <p v-if="!isCollapsed">
        后台管理平台
      </p>
      <i v-else i-mdi:medal-outline icon-btn />
    </div>
    <n-scrollbar
      :style="{
        'max-height': `calc(100vh - ${props.headerHeight})`,
      }" trigger="hover" :size="30"
    >
      <n-menu :value="activeKey" :collapsed-width="props.sideWidth" :options="menuOptions" :indent="18" />
    </n-scrollbar>
  </div>
</template>

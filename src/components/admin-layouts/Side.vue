<script setup lang='ts'>
import type { MenuGroupOption, MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'
import { RouterLink } from 'vue-router'
import pages from 'virtual:generated-pages'
import type { SideProps } from './types'

interface Route extends Array<RouteRecordRaw> {
  name: string
  componentPath: string
  children: Route[]
}

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
const menuOptions = ref<Array<MenuOption | MenuGroupOption>>([])

// 创建父子关系
function createHierarchy(data: Route[], parentPath = '') {
  const result: any[] = []

  data.forEach((item) => {
    console.log("🚀 ~ file: Side.vue:36 ~ data.forEach ~ item:", item.componentPath.startsWith(parentPath))
    if (item.componentPath.startsWith(parentPath)) {
      const path = item.componentPath.replace(parentPath, '').split('/')
      const name = path[0]

      if (path.length === 1) {
        result.push({ ...item, children: [] })
      }
      else {
        const existingParent = result.find(parent => parent.name === name)
        if (existingParent) {
          existingParent.children.push(item)
        }
        else {
          const parentItem: any = { name, children: [] }
          parentItem.children.push(item)
          result.push(parentItem)
        }
      }
    }
  })

  result.forEach((parent) => {
    parent.children = createHierarchy(parent.children, `${parentPath}${parent.name}/`)
  })

  return result
}

// 获取父子关系
const result = createHierarchy(pages as unknown as Route[])

result.forEach(async (v) => {
  console.log('🚀 ~ file: Side.vue:68 ~ result.forEach ~ v:', v)
  if (!v?.meta?.hiddenMenu) {
    menuOptions.value.push({
      label: () =>
        h(
          RouterLink,
          {
            to: {
              name: v.name,
            },
          },
          { default: () => v?.meta?.title || '未设置菜单名称' },
        ),
      icon: renderIcon(v?.meta?.icon || 'i-mdi:alert'),
      key: v.name,
    })
  }
})
console.log('🚀 ~ file: Side.vue:76 ~ result:', result)
</script>

<template>
  <div
    :style="{
      width: `${props.sideWidth}px`,
    }"
  >
    <div
      class="flex items-center justify-center bb-border" :style="{
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

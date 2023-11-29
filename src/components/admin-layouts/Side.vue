<script setup lang='ts'>
import type { MenuGroupOption, MenuOption } from 'naive-ui'
import { NIcon } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'
import { RouterLink } from 'vue-router'
import pages from 'virtual:generated-pages'
import type { SideProps } from './types'

type Route = {
  name: string
  componentPath: string
  children?: Route[]
  menuName?: string
  menuIcon?: string
  meta: {
    title: string
    icon: string
    hiddenMenu: boolean
    menuName?: string
    menuIcon?: string
  }
} & RouteRecordRaw

const props = withDefaults(defineProps<SideProps>(), {
  isCollapsed: false,
  sideWidth: 220,
  headerHeight: '4rem',
})

const route = useRoute()
const activeKey = computed(() => (route.name as string))

function renderIcon(icon?: string) {
  if (!icon)
    return

  return () => h(NIcon, {
    class: icon,
  })
}
const menuOptions = ref<Array<MenuOption | MenuGroupOption>>([])

// 创建父子关系
function createHierarchy(data: Route[], parentPath = ''): Route[] {
  const result: any[] = []

  data.forEach((item) => {
    if (item.meta?.hiddenMenu)
      return

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

          if (path[path.length - 1] === 'index') {
            parentItem.menuName = item.meta?.menuName
            parentItem.menuIcon = item.meta?.menuIcon
          }

          parentItem.children.push(item)
          result.push(parentItem)
        }
      }
    }
  })

  result.forEach((parent) => {
    if (parent.children <= 0)
      return

    parent.children = createHierarchy(parent.children, `${parentPath}${parent.name}/`)
  })

  return result
}

// 获取父子关系并按照路径长短排序
const routePage = (pages as Route[]).sort((a, b) => a.componentPath.split('/').length - b.componentPath.split('/').length)

const result = createHierarchy(routePage)

function createMenu(data: Route[]) {
  const menu: Array<MenuOption | MenuGroupOption> = []
  data.forEach((v) => {
    if (!v?.meta?.hiddenMenu) {
      const item: MenuOption | MenuGroupOption = {
        label: () =>
          v!.children!.length > 0
            ? (v?.menuName || '未设置菜单名称')
            : h(
              RouterLink,
              {
                to: {
                  name: v.name,
                },
              },
              { default: () => v?.meta?.title || '未设置菜单名称' },
            ),
        icon: renderIcon(v.children!.length > 0 ? v?.menuIcon : v?.meta?.icon || 'i-mdi:alert'),
        key: v.name,
      }

      if (v.children && v.children.length > 0)
        item.children = createMenu(v.children)

      menu.push(item)
    }
  })
  return menu
}
menuOptions.value = createMenu(result)
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

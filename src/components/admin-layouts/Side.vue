<script setup lang='ts'>
import { NIcon } from 'naive-ui'
import type { SideProps } from './types'

const props = withDefaults(defineProps<SideProps>(), {
  isCollapsed: false,
  sideWidth: 220,
  headerHeight: '4rem',
})

const activeKey = ref<string | null>(

)
function renderIcon(icon: string) {
  return () => h(NIcon, {
    class: icon,
  })
}

const menuOptions = [
  {
    label: () =>
      h(
        'a',
        {
          href: 'https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F',
          target: '_blank',
          rel: 'noopenner noreferrer',
        },
        '且听风吟',
      ),
    key: 'hear-the-wind-sing',

  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon('i-mdi:ab-testing'),
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
  },
  {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',

    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',

          },
          {
            label: '羊男',
            key: 'sheep-man',

          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',

        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  }, {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',

    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',

          },
          {
            label: '羊男',
            key: 'sheep-man',

          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',

        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  }, {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',

    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',

          },
          {
            label: '羊男',
            key: 'sheep-man',

          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',

        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  }, {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',

    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',

          },
          {
            label: '羊男',
            key: 'sheep-man',

          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',

        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  }, {
    label: '舞，舞，舞',
    key: 'dance-dance-dance',

    children: [
      {
        type: 'group',
        label: '人物',
        key: 'people',
        children: [
          {
            label: '叙事者',
            key: 'narrator',

          },
          {
            label: '羊男',
            key: 'sheep-man',

          },
        ],
      },
      {
        label: '饮品',
        key: 'beverage',

        children: [
          {
            label: '威士忌',
            key: 'whisky',
          },
        ],
      },
      {
        label: '食物',
        key: 'food',
        children: [
          {
            label: '三明治',
            key: 'sandwich',
          },
        ],
      },
      {
        label: '过去增多，未来减少',
        key: 'the-past-increases-the-future-recedes',
      },
    ],
  },
]
</script>

<template>
  <div
    :style="{
      width: `${props.sideWidth}px`,
    }"
  >
    <div
      class="bb-border flex items-center justify-center"
      :style="{
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
      }"
      trigger="hover" :size="30"
    >
      <n-menu
        :value="activeKey"
        :collapsed-width="props.sideWidth"
        :options="menuOptions"
        :indent="18"
      />
    </n-scrollbar>
  </div>
</template>

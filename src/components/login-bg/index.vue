<script lang="ts" setup>
import { CornerBottom, CornerTop } from './components'
import { getColorPalette } from '~/utils/color'

interface Props {
  /** 主题颜色 */
  themeColor: string
}

const props = defineProps<Props>()

const lightColor = computed(() => getColorPalette(props.themeColor, 3))
const darkColor = computed(() => getColorPalette(props.themeColor, 6))
</script>

<template>
  <div class="absolute-lt z-1 wh-full overflow-hidden">
    <div class="absolute -right-300px -top-900px <sm:(-right-100px -top-1170px)">
      <CornerTop :start-color="lightColor" :end-color="darkColor" />
    </div>
    <div class="absolute -bottom-400px -left-200px <sm:(-bottom-760px -left-100px)">
      <CornerBottom :start-color="darkColor" :end-color="lightColor" />
    </div>
  </div>
</template>

<style scoped></style>

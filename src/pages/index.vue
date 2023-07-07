<script setup lang='ts'>
const { loading, data: list } = useRequest(() => getList({ id: 123 }))
</script>

<template>
  <div>
    <n-card v-if="!loading" title="卡片">
      {{ list }}
    </n-card>
  </div>
</template>

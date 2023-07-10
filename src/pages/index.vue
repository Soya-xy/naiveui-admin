<script setup lang='ts'>
</script>

<template>
  <div>
    <n-card>
      <n-statistic label="你一共处理了" tabular-nums>
        <n-number-animation :from="0" :to="12039" />
        <template #suffix>
          条群消息
        </template>
      </n-statistic>
      <n-space vertical>
        花时间、花精力、花心思，愿你每一份努力都不负所望
        <n-button>
          播放
        </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<route lang="yaml">
meta:
  title: 首页
</route>

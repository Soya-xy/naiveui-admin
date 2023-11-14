<script setup lang='ts'>
import '@ldzn/login'

const user = useUserStore()
const Message = useMessage()

async function login({ detail }: CustomEvent) {
  if (detail.code === 200) {
    user.user = detail.data
    user.token = detail.data.token
    Message.success('登录成功')
    setTimeout(() => {
      location.href = `/`
    }, 500)
  }

  else {
    Message.error(detail.msg)
  }
}
</script>

<template>
  <div>
    <ld-login title="智能系统" subtitle="安新分公司路网运行监测与调度平台" closecap @login="login" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
  hiddenMenu: true
</route>

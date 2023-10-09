<script setup lang="ts">
import type { FormInst, FormRules } from 'naive-ui'
import { formRules } from '~/utils/rules'

const { theme } = useConfigStore()

const formRef = ref<HTMLElement & FormInst>()
const model = reactive({
  userName: 'Soybean',
  password: 'soybean123',
})
const rules: FormRules = {
  password: formRules.pwd,
}
const loginLoading = ref(false)

async function handleSubmit() {
  await formRef.value?.validate()

  const { userName, password } = model
  console.log('🚀 ~ file: login.vue:19 ~ handleSubmit ~ userName, password:', userName, password)

  // login(userName, password)
}
</script>

<template>
  <div wh-full>
    <div class="wh-full flex-center" bg="#B6C9FC">
      <n-card :bordered="false" size="large" class="z-4 rounded-20px shadow-sm !w-auto">
        <div class="w-300px sm:w-360px">
          <header class="flex-y-center justify-between">
            <n-gradient-text type="primary" :size="28">
              后台管理系统
            </n-gradient-text>
          </header>
          <main class="pt-24px">
            <h3 class="text-primary text-18px font-medium">
              账号登录
            </h3>
            <div class="pt-24px">
              <n-form ref="formRef" :model="model" :rules="rules" size="large" :show-label="false">
                <n-form-item path="userName">
                  <n-input v-model:value="model.userName" placeholder="请输入用户名" />
                </n-form-item>
                <n-form-item path="password">
                  <n-input v-model:value="model.password" type="password" show-password-on="click" placeholder="请输入密码" />
                </n-form-item>
                <n-space :vertical="true" :size="24">
                  <n-button
                    type="primary" size="large" :block="true" :round="true" :loading="loginLoading"
                    @click="handleSubmit"
                  >
                    确定
                  </n-button>
                </n-space>
              </n-form>
            </div>
          </main>
        </div>
      </n-card>
    </div>
    <LoginBg :theme-color="theme.defaultColor" />
  </div>
</template>

<style scoped>
</style>

<route lang="yaml">
meta:
  layout: empty
</route>

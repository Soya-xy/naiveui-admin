import { acceptHMRUpdate, defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  /**
   * Current name of the Config.
   */
  const theme = ref({
    defaultColor: '#165dff',
    hoverColor: '#0044ff',
  })

  return {
    theme,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore as any, import.meta.hot))

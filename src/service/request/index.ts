import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import VueHook from 'alova/vue'
import { axiosRequestAdapter } from '@alova/adapter-axios'

const baseURL = '/api'

export function alovaInstance(base = baseURL) {
  return createAlova({
    baseURL: `http://${import.meta.env.VITE_API_URL}${base}`,
    statesHook: VueHook,
    requestAdapter: GlobalFetch(),
    responded: response => response.json(),
  })
}

// upload alova instance
export const uploadAlova = createAlova({
  baseURL,
  statesHook: VueHook,
  requestAdapter: axiosRequestAdapter(),
})

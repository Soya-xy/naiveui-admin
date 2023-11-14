import { alovaInstance } from '../request'

interface ID {
  id: number
}

const api = alovaInstance()
const bffApi = alovaInstance('/bff')

export const postData = (data: ID) => api.Post('/app', data)
export const getList = (params: ID) => api.Get('/app', { params })
export const getCamera = () => bffApi.Get('/data/camera')

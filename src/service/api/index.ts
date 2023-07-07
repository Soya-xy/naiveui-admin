import { alovaInstance } from '../request'

interface ID {
  id: number
}

export const postData = (data: ID) => alovaInstance.Post('/app', data)
export const getList = (params: ID) => alovaInstance.Get('/app', { params })

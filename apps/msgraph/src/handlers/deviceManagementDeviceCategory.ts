import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementDeviceCategoriesDeviceCategoryIdRoute,
  getDeviceManagementDeviceCategoriesCountRoute,
  getDeviceManagementDeviceCategoriesDeviceCategoryIdRoute,
  getDeviceManagementDeviceCategoriesRoute,
  patchDeviceManagementDeviceCategoriesDeviceCategoryIdRoute,
  postDeviceManagementDeviceCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementDeviceCategoryHandler = app
  .openapi(getDeviceManagementDeviceCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementDeviceCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceCategoriesDeviceCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementDeviceCategoriesDeviceCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementDeviceCategoriesDeviceCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementDeviceCategoriesCountRoute, (c) => {
    throw new Error('Not implemented')
  })

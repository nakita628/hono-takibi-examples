import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDeviceManagementIosUpdateStatusesIosUpdateDeviceStatusIdRoute,
  getDeviceManagementIosUpdateStatusesIosUpdateDeviceStatusIdRoute,
  getDeviceManagementIosUpdateStatusesRoute,
  patchDeviceManagementIosUpdateStatusesIosUpdateDeviceStatusIdRoute,
  postDeviceManagementIosUpdateStatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementIosUpdateDeviceStatusHandler = app
  .openapi(getDeviceManagementIosUpdateStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeviceManagementIosUpdateStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDeviceManagementIosUpdateStatusesIosUpdateDeviceStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceManagementIosUpdateStatusesIosUpdateDeviceStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDeviceManagementIosUpdateStatusesIosUpdateDeviceStatusIdRoute, (c) => {
    throw new Error('Not implemented')
  })

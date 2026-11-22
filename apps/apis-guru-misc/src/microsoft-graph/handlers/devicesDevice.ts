import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesDeviceIdRoute,
  getDevicesDeviceIdRoute,
  getDevicesRoute,
  patchDevicesDeviceIdRoute,
  postDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesDeviceHandler = app
  .openapi(getDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

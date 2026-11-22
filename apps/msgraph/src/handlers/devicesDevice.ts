import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesDeviceIdDeviceIdRoute,
  deleteDevicesDeviceIdRoute,
  getDevicesCountRoute,
  getDevicesDeviceIdDeviceIdRoute,
  getDevicesDeviceIdRoute,
  getDevicesRoute,
  patchDevicesDeviceIdDeviceIdRoute,
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
  .openapi(getDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDevicesDeviceIdDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesCountRoute, (c) => {
    throw new Error('Not implemented')
  })

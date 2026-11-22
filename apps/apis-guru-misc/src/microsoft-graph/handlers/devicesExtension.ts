import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesDeviceIdExtensionsExtensionIdRoute,
  getDevicesDeviceIdExtensionsExtensionIdRoute,
  getDevicesDeviceIdExtensionsRoute,
  patchDevicesDeviceIdExtensionsExtensionIdRoute,
  postDevicesDeviceIdExtensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesExtensionHandler = app
  .openapi(getDevicesDeviceIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesDeviceIdExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDevicesDeviceIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesDeviceIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDevicesDeviceIdExtensionsExtensionIdRoute, (c) => {
    throw new Error('Not implemented')
  })

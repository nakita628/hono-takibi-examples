import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiVersionProfileDevicesDeviceIdRoute,
  getApiVersionProfileDevicesDeviceIdRoute,
  getApiVersionProfileDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trustedDevicesHandler = app
  .openapi(getApiVersionProfileDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiVersionProfileDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

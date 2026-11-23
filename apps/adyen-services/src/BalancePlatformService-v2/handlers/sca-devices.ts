import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteScaDevicesDeviceIdRoute,
  patchScaDevicesDeviceIdRoute,
  postScaDevicesDeviceIdScaAssociationsRoute,
  postScaDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scaDevicesHandler = app
  .openapi(postScaDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteScaDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchScaDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScaDevicesDeviceIdScaAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })

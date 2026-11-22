import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRegisteredDevicesIdRoute,
  getRegisteredDevicesRoute,
  patchRegisteredDevicesDeviceIdAssociationsRoute,
  patchRegisteredDevicesIdRoute,
  postRegisteredDevicesDeviceIdAssociationsRoute,
  postRegisteredDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageSCADevicesHandler = app
  .openapi(getRegisteredDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegisteredDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegisteredDevicesDeviceIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRegisteredDevicesDeviceIdAssociationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRegisteredDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRegisteredDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

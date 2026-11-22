import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePhoneDevicesDeviceIdRoute,
  getPhoneDevicesDeviceIdRoute,
  getPhoneDevicesRoute,
  patchPhoneDevicesDeviceIdRoute,
  postPhoneDevicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneDevicesHandler = app
  .openapi(getPhoneDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePhoneDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPhoneDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneDevicesDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })

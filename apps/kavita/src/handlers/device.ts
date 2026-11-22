import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiDeviceClientDeviceRoute,
  deleteApiDeviceRoute,
  getApiDeviceClientAllDevicesRoute,
  getApiDeviceClientDevicesRoute,
  getApiDeviceRoute,
  postApiDeviceClientUpdateNameRoute,
  postApiDeviceCreateRoute,
  postApiDeviceSendSeriesToRoute,
  postApiDeviceSendToRoute,
  postApiDeviceUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceHandler = app
  .openapi(postApiDeviceCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceSendToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceSendSeriesToRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeviceClientDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiDeviceClientAllDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiDeviceClientDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiDeviceClientUpdateNameRoute, (c) => {
    throw new Error('Not implemented')
  })

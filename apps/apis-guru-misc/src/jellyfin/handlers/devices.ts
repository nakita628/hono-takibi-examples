import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDevicesRoute,
  getDevicesInfoRoute,
  getDevicesOptionsRoute,
  getDevicesRoute,
  postDevicesOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(deleteDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })

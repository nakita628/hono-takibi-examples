import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesIdIndexRoute, getDevicesIndexRoute, postDevicesIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })

import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesIdRoute, getDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app
  .openapi(getDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })

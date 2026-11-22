import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeviceItemIdRoute, getDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceHandler = app
  .openapi(getDeviceItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })

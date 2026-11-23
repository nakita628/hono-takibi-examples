import { OpenAPIHono } from '@hono/zod-openapi'
import { getIruDevicesIdRoute, getIruDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const iruDevicesHandler = app
  .openapi(getIruDevicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIruDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })

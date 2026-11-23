import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app.openapi(getDevicesRoute, (c) => {
  throw new Error('Not implemented')
})

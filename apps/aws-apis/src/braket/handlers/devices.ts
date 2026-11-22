import { OpenAPIHono } from '@hono/zod-openapi'
import { postDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const devicesHandler = app.openapi(postDevicesRoute, (c) => {
  throw new Error('Not implemented')
})

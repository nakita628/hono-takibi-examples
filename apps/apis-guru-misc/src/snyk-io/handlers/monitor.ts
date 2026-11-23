import { OpenAPIHono } from '@hono/zod-openapi'
import { postMonitorDepGraphRoute } from '../routes'

const app = new OpenAPIHono()

export const monitorHandler = app.openapi(postMonitorDepGraphRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { postMonitoredResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const monitoredResourcesHandler = app.openapi(postMonitoredResourcesRoute, (c) => {
  throw new Error('Not implemented')
})

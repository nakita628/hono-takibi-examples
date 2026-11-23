import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app.openapi(getHealthCheckRoute, (c) => {
  throw new Error('Not implemented')
})

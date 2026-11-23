import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const healthCheckHandler = app.openapi(getHealthCheckRoute, (c) => {
  throw new Error('Not implemented')
})

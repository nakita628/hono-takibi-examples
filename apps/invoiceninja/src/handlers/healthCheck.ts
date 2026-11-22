import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1HealthCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const healthCheckHandler = app.openapi(getApiV1HealthCheckRoute, (c) => {
  throw new Error('Not implemented')
})

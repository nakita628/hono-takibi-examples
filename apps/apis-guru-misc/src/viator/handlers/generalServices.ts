import { OpenAPIHono } from '@hono/zod-openapi'
import { getHealthCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const generalServicesHandler = app.openapi(getHealthCheckRoute, (c) => {
  throw new Error('Not implemented')
})

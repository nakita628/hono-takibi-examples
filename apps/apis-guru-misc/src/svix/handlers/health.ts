import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1HealthIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app.openapi(getApiV1HealthIndexRoute, (c) => {
  throw new Error('Not implemented')
})

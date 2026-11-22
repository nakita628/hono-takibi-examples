import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3HealthRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app.openapi(getApiV3HealthRoute, (c) => {
  throw new Error('Not implemented')
})

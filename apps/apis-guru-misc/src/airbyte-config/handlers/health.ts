import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1HealthRoute } from '../routes'

const app = new OpenAPIHono()

export const healthHandler = app.openapi(getV1HealthRoute, (c) => {
  throw new Error('Not implemented')
})

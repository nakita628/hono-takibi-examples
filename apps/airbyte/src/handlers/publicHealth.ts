import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicV1HealthRoute } from '../routes'

const app = new OpenAPIHono()

export const publicHealthHandler = app.openapi(getPublicV1HealthRoute, (c) => {
  throw new Error('Not implemented')
})

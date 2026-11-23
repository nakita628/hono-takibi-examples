import { OpenAPIHono } from '@hono/zod-openapi'
import { getRateLimitRoute } from '../routes'

const app = new OpenAPIHono()

export const rateLimitHandler = app.openapi(getRateLimitRoute, (c) => {
  throw new Error('Not implemented')
})

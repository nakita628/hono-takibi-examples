import { OpenAPIHono } from '@hono/zod-openapi'
import { getRateLimitIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const rateLimitHandler = app.openapi(getRateLimitIndexRoute, (c) => {
  throw new Error('Not implemented')
})

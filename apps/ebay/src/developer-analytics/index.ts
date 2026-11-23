import { OpenAPIHono } from '@hono/zod-openapi'
import { getRateLimitIndexRoute, getUserRateLimitIndexRoute } from './routes'
import { getRateLimitIndexRouteHandler, getUserRateLimitIndexRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRateLimitIndexRoute, getRateLimitIndexRouteHandler)
  .openapi(getUserRateLimitIndexRoute, getUserRateLimitIndexRouteHandler)

export default app

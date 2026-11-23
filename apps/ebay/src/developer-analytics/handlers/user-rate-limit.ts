import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserRateLimitIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const userRateLimitHandler = app.openapi(getUserRateLimitIndexRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import { getRateLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const rateLimitsHandler = app.openapi(getRateLimitsRoute, (c) => {
  throw new Error('Not implemented')
})

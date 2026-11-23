import { OpenAPIHono } from '@hono/zod-openapi'
import { rateLimitHandler, userRateLimitHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', rateLimitHandler).route('/', userRateLimitHandler)

export default app

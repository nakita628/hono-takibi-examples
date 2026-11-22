import { OpenAPIHono } from '@hono/zod-openapi'
import { pageLoadPerformanceTimeHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pageLoadPerformanceTimeHandler)

export default app

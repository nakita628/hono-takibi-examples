import { OpenAPIHono } from '@hono/zod-openapi'
import { priceMetricsHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', priceMetricsHandler)

export default app

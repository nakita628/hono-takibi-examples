import { OpenAPIHono } from '@hono/zod-openapi'
import { pricingHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pricingHandler)

export default app

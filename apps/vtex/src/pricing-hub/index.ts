import { OpenAPIHono } from '@hono/zod-openapi'
import { pricingHubPricesHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', pricingHubPricesHandler)

export default app

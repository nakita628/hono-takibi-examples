import { OpenAPIHono } from '@hono/zod-openapi'
import { shipmentHandler, shippingQuoteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.route('/', shipmentHandler).route('/', shippingQuoteHandler)

export default app

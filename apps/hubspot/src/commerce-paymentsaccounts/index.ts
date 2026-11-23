import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommercePaymentAccounts202609StatusRoute } from './routes'
import { getCommercePaymentAccounts202609StatusRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getCommercePaymentAccounts202609StatusRoute,
  getCommercePaymentAccounts202609StatusRouteHandler,
)

export default app

import { OpenAPIHono } from '@hono/zod-openapi'
import { getCommercePaymentAccounts202609StatusRoute } from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app.openapi(getCommercePaymentAccounts202609StatusRoute, (c) => {
  throw new Error('Not implemented')
})

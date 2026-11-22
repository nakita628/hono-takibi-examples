import { OpenAPIHono } from '@hono/zod-openapi'
import { getPaymentsProgramMarketplaceIdPaymentsProgramTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const paymentsProgramHandler = app.openapi(
  getPaymentsProgramMarketplaceIdPaymentsProgramTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

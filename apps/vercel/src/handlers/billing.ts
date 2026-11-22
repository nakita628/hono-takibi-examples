import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1BillingChargesRoute, postV1BillingBuyRoute } from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
  .openapi(getV1BillingChargesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BillingBuyRoute, (c) => {
    throw new Error('Not implemented')
  })

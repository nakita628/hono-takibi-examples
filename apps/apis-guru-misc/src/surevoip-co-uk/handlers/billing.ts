import { OpenAPIHono } from '@hono/zod-openapi'
import { getBillingRoute } from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app.openapi(getBillingRoute, (c) => {
  throw new Error('Not implemented')
})

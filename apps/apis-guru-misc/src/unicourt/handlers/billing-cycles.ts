import { OpenAPIHono } from '@hono/zod-openapi'
import { getBillingCyclesRoute } from '../routes'

const app = new OpenAPIHono()

export const billingCyclesHandler = app.openapi(getBillingCyclesRoute, (c) => {
  throw new Error('Not implemented')
})

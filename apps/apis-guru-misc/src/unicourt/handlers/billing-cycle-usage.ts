import { OpenAPIHono } from '@hono/zod-openapi'
import { getBillingCycleUsageBillingCycleRoute } from '../routes'

const app = new OpenAPIHono()

export const billingCycleUsageHandler = app.openapi(getBillingCycleUsageBillingCycleRoute, (c) => {
  throw new Error('Not implemented')
})

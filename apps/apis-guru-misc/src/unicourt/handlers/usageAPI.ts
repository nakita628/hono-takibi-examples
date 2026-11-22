import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillingCyclesRoute,
  getBillingCycleUsageBillingCycleRoute,
  getDailyUsageDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageAPIHandler = app
  .openapi(getBillingCycleUsageBillingCycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBillingCyclesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDailyUsageDateRoute, (c) => {
    throw new Error('Not implemented')
  })

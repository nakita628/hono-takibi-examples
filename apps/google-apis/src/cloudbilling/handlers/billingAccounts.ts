import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1betaBillingAccountEstimateCostScenarioRoute } from '../routes'

const app = new OpenAPIHono()

export const billingAccountsHandler = app.openapi(
  postV1betaBillingAccountEstimateCostScenarioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

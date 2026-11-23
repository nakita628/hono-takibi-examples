import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1betaBillingAccountEstimateCostScenarioRoute } from '../routes'

const app = new OpenAPIHono()

export const v1betaHandler = app.openapi(postV1betaBillingAccountEstimateCostScenarioRoute, (c) => {
  throw new Error('Not implemented')
})

import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1betaBillingAccountEstimateCostScenarioRoute,
  postV1betaEstimateCostScenarioRoute,
} from './routes'
import {
  postV1betaBillingAccountEstimateCostScenarioRouteHandler,
  postV1betaEstimateCostScenarioRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1betaBillingAccountEstimateCostScenarioRoute,
    postV1betaBillingAccountEstimateCostScenarioRouteHandler,
  )
  .openapi(postV1betaEstimateCostScenarioRoute, postV1betaEstimateCostScenarioRouteHandler)

export default app

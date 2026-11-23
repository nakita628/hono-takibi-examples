import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetCostEstimateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetCostEstimateHandler = app.openapi(
  postXAmzTargetLightsail20161128GetCostEstimateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

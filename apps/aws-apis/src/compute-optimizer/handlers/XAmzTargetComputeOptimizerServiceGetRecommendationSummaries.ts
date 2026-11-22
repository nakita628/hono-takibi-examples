import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetRecommendationSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetRecommendationSummariesHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetRecommendationSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

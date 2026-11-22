import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetRecommendationPreferencesHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetRecommendationPreferencesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

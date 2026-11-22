import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceDeleteRecommendationPreferencesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

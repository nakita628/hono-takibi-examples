import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServicePutRecommendationPreferencesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServicePutRecommendationPreferencesHandler = app.openapi(
  postXAmzTargetComputeOptimizerServicePutRecommendationPreferencesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

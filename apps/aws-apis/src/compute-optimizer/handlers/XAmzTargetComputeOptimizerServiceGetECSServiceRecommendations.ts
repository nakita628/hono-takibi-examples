import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

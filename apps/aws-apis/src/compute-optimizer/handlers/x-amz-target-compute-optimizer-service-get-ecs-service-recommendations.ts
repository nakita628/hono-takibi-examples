import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceGetEcsServiceRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

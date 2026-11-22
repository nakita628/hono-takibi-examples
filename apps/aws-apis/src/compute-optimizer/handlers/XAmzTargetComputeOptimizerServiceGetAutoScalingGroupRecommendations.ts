import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsHandler =
  app.openapi(postXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })

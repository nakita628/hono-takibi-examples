import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsHandler =
  app.openapi(postXAmzTargetComputeOptimizerServiceGetAutoScalingGroupRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })

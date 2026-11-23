import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsHandler =
  app.openapi(
    postXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

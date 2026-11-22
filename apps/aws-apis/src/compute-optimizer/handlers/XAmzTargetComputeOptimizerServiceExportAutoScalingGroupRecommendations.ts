import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsHandler =
  app.openapi(
    postXAmzTargetComputeOptimizerServiceExportAutoScalingGroupRecommendationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceGetEcsServiceRecommendationProjectedMetricsHandler =
  app.openapi(
    postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

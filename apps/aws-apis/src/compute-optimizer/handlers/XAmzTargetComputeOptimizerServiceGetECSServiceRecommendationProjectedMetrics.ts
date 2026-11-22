import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsHandler =
  app.openapi(
    postXAmzTargetComputeOptimizerServiceGetECSServiceRecommendationProjectedMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsHandler =
  app.openapi(
    postXAmzTargetComputeOptimizerServiceGetEC2RecommendationProjectedMetricsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

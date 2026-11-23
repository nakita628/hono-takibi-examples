import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceExportEcsServiceRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceExportECSServiceRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

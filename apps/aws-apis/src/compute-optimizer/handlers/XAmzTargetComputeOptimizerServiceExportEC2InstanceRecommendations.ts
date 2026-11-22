import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceExportEC2InstanceRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

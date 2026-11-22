import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceDescribeRecommendationExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

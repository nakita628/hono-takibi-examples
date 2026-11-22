import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

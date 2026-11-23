import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceGetEc2InstanceRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetEC2InstanceRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetLambdaFunctionRecommendationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

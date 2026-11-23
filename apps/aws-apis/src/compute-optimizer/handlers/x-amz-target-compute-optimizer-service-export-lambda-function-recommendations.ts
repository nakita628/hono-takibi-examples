import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsHandler =
  app.openapi(
    postXAmzTargetComputeOptimizerServiceExportLambdaFunctionRecommendationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineEvaluateExpressionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineEvaluateExpressionHandler = app.openapi(
  postXAmzTargetDataPipelineEvaluateExpressionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

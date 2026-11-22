import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineEvaluateExpressionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineEvaluateExpressionHandler = app.openapi(
  postXAmzTargetDataPipelineEvaluateExpressionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709RetryStageExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709RetryStageExecutionHandler = app.openapi(
  postXAmzTargetCodePipeline20150709RetryStageExecutionRoute,
  (c) => {},
)

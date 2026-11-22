import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709GetPipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709GetPipelineExecutionHandler = app.openapi(
  postXAmzTargetCodePipeline20150709GetPipelineExecutionRoute,
  (c) => {},
)

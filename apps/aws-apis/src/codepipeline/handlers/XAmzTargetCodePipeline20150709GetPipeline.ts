import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709GetPipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709GetPipelineHandler = app.openapi(
  postXAmzTargetCodePipeline20150709GetPipelineRoute,
  (c) => {},
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709CreatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709CreatePipelineHandler = app.openapi(
  postXAmzTargetCodePipeline20150709CreatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

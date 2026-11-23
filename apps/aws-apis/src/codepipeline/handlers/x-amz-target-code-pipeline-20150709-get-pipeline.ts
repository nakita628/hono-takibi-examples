import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709GetPipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709GetPipelineHandler = app.openapi(
  postXAmzTargetCodePipeline20150709GetPipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

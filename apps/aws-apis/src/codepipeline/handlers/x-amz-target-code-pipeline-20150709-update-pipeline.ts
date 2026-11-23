import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709UpdatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709UpdatePipelineHandler = app.openapi(
  postXAmzTargetCodePipeline20150709UpdatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

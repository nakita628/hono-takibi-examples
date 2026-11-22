import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709DeletePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709DeletePipelineHandler = app.openapi(
  postXAmzTargetCodePipeline20150709DeletePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

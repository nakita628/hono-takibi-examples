import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709GetPipelineStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709GetPipelineStateHandler = app.openapi(
  postXAmzTargetCodePipeline20150709GetPipelineStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

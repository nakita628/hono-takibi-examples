import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709StartPipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodePipeline20150709StartPipelineExecutionHandler = app.openapi(
  postXAmzTargetCodePipeline20150709StartPipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

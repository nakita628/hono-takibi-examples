import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodePipeline20150709StopPipelineExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodePipeline20150709StopPipelineExecutionHandler = app.openapi(
  postXAmzTargetCodePipeline20150709StopPipelineExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

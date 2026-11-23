import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineActivatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineActivatePipelineHandler = app.openapi(
  postXAmzTargetDataPipelineActivatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

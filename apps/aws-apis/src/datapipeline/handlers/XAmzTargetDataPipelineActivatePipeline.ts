import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineActivatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineActivatePipelineHandler = app.openapi(
  postXAmzTargetDataPipelineActivatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

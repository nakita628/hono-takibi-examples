import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineDeactivatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineDeactivatePipelineHandler = app.openapi(
  postXAmzTargetDataPipelineDeactivatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

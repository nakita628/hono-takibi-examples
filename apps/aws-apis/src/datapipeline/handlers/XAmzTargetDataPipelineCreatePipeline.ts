import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineCreatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineCreatePipelineHandler = app.openapi(
  postXAmzTargetDataPipelineCreatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

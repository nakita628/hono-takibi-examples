import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineCreatePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineCreatePipelineHandler = app.openapi(
  postXAmzTargetDataPipelineCreatePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

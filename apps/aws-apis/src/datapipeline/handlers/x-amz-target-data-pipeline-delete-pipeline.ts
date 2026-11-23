import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineDeletePipelineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineDeletePipelineHandler = app.openapi(
  postXAmzTargetDataPipelineDeletePipelineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

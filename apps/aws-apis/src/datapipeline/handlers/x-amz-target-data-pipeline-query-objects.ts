import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineQueryObjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineQueryObjectsHandler = app.openapi(
  postXAmzTargetDataPipelineQueryObjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

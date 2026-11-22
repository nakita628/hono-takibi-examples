import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineRemoveTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineRemoveTagsHandler = app.openapi(
  postXAmzTargetDataPipelineRemoveTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

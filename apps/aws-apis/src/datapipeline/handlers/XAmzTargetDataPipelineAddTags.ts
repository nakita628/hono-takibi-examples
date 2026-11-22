import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineAddTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineAddTagsHandler = app.openapi(
  postXAmzTargetDataPipelineAddTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

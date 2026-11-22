import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416AddTagsToResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416AddTagsToResourceHandler = app.openapi(
  postXAmzTargetDirectoryService20150416AddTagsToResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

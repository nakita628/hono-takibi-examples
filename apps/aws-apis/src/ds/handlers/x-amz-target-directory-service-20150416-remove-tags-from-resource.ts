import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416RemoveTagsFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416RemoveTagsFromResourceHandler = app.openapi(
  postXAmzTargetDirectoryService20150416RemoveTagsFromResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

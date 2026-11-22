import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416ListTagsForResourceHandler = app.openapi(
  postXAmzTargetDirectoryService20150416ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

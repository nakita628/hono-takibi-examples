import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416ShareDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416ShareDirectoryHandler = app.openapi(
  postXAmzTargetDirectoryService20150416ShareDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

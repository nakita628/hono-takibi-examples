import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CreateDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416CreateDirectoryHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CreateDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

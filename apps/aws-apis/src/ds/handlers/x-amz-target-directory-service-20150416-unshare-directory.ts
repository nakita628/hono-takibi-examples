import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416UnshareDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416UnshareDirectoryHandler = app.openapi(
  postXAmzTargetDirectoryService20150416UnshareDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

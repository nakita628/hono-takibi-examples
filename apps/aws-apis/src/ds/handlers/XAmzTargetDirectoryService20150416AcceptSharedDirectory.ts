import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416AcceptSharedDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416AcceptSharedDirectoryHandler = app.openapi(
  postXAmzTargetDirectoryService20150416AcceptSharedDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

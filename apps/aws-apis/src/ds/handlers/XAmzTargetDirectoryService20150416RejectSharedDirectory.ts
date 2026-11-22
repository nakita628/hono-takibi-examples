import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416RejectSharedDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416RejectSharedDirectoryHandler = app.openapi(
  postXAmzTargetDirectoryService20150416RejectSharedDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

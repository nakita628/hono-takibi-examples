import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416ConnectDirectoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416ConnectDirectoryHandler = app.openapi(
  postXAmzTargetDirectoryService20150416ConnectDirectoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416RemoveIpRoutesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416RemoveIpRoutesHandler = app.openapi(
  postXAmzTargetDirectoryService20150416RemoveIpRoutesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

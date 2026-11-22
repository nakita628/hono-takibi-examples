import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416AddIpRoutesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416AddIpRoutesHandler = app.openapi(
  postXAmzTargetDirectoryService20150416AddIpRoutesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

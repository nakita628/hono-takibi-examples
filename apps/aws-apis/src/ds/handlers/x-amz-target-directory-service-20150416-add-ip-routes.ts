import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416AddIpRoutesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416AddIpRoutesHandler = app.openapi(
  postXAmzTargetDirectoryService20150416AddIpRoutesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

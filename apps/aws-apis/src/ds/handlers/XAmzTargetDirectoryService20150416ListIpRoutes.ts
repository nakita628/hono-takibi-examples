import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416ListIpRoutesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416ListIpRoutesHandler = app.openapi(
  postXAmzTargetDirectoryService20150416ListIpRoutesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

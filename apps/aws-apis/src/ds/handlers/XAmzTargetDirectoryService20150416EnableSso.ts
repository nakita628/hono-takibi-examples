import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416EnableSsoRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416EnableSsoHandler = app.openapi(
  postXAmzTargetDirectoryService20150416EnableSsoRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

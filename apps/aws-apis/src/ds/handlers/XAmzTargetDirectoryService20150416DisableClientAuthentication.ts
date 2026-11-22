import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DisableClientAuthenticationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DisableClientAuthenticationHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DisableClientAuthenticationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

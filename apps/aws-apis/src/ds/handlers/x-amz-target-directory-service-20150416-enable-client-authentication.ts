import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416EnableClientAuthenticationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416EnableClientAuthenticationHandler = app.openapi(
  postXAmzTargetDirectoryService20150416EnableClientAuthenticationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

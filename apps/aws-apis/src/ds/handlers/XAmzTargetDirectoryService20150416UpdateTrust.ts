import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416UpdateTrustRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416UpdateTrustHandler = app.openapi(
  postXAmzTargetDirectoryService20150416UpdateTrustRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

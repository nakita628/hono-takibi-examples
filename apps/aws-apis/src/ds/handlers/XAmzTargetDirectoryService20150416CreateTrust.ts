import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CreateTrustRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416CreateTrustHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CreateTrustRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DeleteTrustRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DeleteTrustHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DeleteTrustRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

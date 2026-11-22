import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416VerifyTrustRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416VerifyTrustHandler = app.openapi(
  postXAmzTargetDirectoryService20150416VerifyTrustRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

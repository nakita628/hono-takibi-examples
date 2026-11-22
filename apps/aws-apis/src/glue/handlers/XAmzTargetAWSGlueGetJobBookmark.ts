import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetJobBookmarkRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetJobBookmarkHandler = app.openapi(
  postXAmzTargetAWSGlueGetJobBookmarkRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

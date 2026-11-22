import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueResetJobBookmarkRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueResetJobBookmarkHandler = app.openapi(
  postXAmzTargetAWSGlueResetJobBookmarkRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetJobRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetJobRunHandler = app.openapi(
  postXAmzTargetAWSGlueGetJobRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

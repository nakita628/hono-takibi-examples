import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetJobRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetJobRunsHandler = app.openapi(
  postXAmzTargetAWSGlueGetJobRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

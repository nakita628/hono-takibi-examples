import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetJobsHandler = app.openapi(
  postXAmzTargetAWSGlueGetJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

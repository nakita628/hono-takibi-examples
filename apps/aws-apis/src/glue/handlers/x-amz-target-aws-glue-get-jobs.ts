import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetJobsHandler = app.openapi(
  postXAmzTargetAWSGlueGetJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

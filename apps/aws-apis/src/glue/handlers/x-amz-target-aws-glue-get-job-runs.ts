import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetJobRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetJobRunsHandler = app.openapi(
  postXAmzTargetAWSGlueGetJobRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetMLTaskRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetMlTaskRunsHandler = app.openapi(
  postXAmzTargetAWSGlueGetMLTaskRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

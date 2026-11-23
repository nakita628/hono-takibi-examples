import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetMLTaskRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetMlTaskRunHandler = app.openapi(
  postXAmzTargetAWSGlueGetMLTaskRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

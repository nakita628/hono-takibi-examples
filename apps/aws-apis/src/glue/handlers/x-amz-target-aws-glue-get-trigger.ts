import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetTriggerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetTriggerHandler = app.openapi(
  postXAmzTargetAWSGlueGetTriggerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

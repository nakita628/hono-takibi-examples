import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStopTriggerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStopTriggerHandler = app.openapi(
  postXAmzTargetAWSGlueStopTriggerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

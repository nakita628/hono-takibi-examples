import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueStartTriggerRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueStartTriggerHandler = app.openapi(
  postXAmzTargetAWSGlueStartTriggerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

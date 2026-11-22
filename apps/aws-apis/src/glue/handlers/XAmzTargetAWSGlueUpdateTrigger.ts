import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateTriggerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateTriggerHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateTriggerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

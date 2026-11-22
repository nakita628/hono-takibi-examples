import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteTriggerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteTriggerHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteTriggerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

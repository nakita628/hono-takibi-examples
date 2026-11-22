import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateTriggerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateTriggerHandler = app.openapi(
  postXAmzTargetAWSGlueCreateTriggerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

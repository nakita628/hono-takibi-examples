import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteClassifierRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteClassifierHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteClassifierRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteSessionHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetMLTransformsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetMLTransformsHandler = app.openapi(
  postXAmzTargetAWSGlueGetMLTransformsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

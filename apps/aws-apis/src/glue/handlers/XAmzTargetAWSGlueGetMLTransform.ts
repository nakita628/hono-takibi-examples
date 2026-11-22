import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetMLTransformRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetMLTransformHandler = app.openapi(
  postXAmzTargetAWSGlueGetMLTransformRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

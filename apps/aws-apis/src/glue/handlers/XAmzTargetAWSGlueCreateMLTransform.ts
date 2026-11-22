import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateMLTransformRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreateMLTransformHandler = app.openapi(
  postXAmzTargetAWSGlueCreateMLTransformRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

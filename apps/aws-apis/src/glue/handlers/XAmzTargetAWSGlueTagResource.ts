import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueTagResourceHandler = app.openapi(
  postXAmzTargetAWSGlueTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

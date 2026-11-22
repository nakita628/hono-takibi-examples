import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUntagResourceHandler = app.openapi(
  postXAmzTargetAWSGlueUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

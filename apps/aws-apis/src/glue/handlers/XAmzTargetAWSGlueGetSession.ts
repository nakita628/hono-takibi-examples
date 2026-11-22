import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetSessionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetSessionHandler = app.openapi(
  postXAmzTargetAWSGlueGetSessionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteUserDefinedFunctionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteUserDefinedFunctionHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteUserDefinedFunctionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

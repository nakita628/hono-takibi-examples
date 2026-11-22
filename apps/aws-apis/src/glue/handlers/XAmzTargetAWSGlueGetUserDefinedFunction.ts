import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUserDefinedFunctionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetUserDefinedFunctionHandler = app.openapi(
  postXAmzTargetAWSGlueGetUserDefinedFunctionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

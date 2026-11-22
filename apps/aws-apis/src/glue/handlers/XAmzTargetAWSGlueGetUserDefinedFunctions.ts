import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUserDefinedFunctionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetUserDefinedFunctionsHandler = app.openapi(
  postXAmzTargetAWSGlueGetUserDefinedFunctionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

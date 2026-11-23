import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUserDefinedFunctionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetUserDefinedFunctionHandler = app.openapi(
  postXAmzTargetAWSGlueGetUserDefinedFunctionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

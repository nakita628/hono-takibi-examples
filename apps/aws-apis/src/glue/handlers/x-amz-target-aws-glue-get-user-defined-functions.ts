import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetUserDefinedFunctionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetUserDefinedFunctionsHandler = app.openapi(
  postXAmzTargetAWSGlueGetUserDefinedFunctionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

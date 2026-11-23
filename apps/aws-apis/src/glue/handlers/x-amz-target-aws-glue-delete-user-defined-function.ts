import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteUserDefinedFunctionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteUserDefinedFunctionHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteUserDefinedFunctionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

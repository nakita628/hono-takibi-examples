import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreateUserDefinedFunctionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreateUserDefinedFunctionHandler = app.openapi(
  postXAmzTargetAWSGlueCreateUserDefinedFunctionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateUserDefinedFunctionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateUserDefinedFunctionHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateUserDefinedFunctionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

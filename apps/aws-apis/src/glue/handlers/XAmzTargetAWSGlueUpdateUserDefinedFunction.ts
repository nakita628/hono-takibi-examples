import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateUserDefinedFunctionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateUserDefinedFunctionHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateUserDefinedFunctionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

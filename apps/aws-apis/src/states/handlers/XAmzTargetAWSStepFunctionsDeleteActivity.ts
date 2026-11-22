import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDeleteActivityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsDeleteActivityHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDeleteActivityRoute,
  (c) => {},
)

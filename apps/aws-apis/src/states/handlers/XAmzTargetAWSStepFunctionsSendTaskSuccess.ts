import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsSendTaskSuccessRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsSendTaskSuccessHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsSendTaskSuccessRoute,
  (c) => {},
)

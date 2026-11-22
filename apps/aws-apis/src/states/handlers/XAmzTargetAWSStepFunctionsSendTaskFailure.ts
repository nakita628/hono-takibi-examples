import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsSendTaskFailureRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsSendTaskFailureHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsSendTaskFailureRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

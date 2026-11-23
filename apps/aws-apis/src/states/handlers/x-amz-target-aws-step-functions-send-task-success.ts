import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsSendTaskSuccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsSendTaskSuccessHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsSendTaskSuccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

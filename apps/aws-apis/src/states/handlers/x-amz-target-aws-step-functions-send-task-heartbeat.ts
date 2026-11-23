import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsSendTaskHeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsSendTaskHeartbeatHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsSendTaskHeartbeatRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

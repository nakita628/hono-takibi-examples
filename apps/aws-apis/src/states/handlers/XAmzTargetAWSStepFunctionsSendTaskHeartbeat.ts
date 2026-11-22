import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsSendTaskHeartbeatRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsSendTaskHeartbeatHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsSendTaskHeartbeatRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsGetExecutionHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsGetExecutionHistoryHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsGetExecutionHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

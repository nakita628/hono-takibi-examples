import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsGetExecutionHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsGetExecutionHistoryHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsGetExecutionHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

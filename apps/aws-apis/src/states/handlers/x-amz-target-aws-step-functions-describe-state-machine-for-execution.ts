import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsDescribeStateMachineForExecutionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

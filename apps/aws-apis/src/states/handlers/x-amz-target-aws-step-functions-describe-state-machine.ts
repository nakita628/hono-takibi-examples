import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDescribeStateMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsDescribeStateMachineHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDescribeStateMachineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

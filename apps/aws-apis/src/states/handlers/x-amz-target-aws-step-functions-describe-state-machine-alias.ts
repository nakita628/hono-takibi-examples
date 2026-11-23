import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDescribeStateMachineAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsDescribeStateMachineAliasHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDescribeStateMachineAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

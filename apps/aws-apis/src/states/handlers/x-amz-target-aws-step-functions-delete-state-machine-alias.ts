import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDeleteStateMachineAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsDeleteStateMachineAliasHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDeleteStateMachineAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

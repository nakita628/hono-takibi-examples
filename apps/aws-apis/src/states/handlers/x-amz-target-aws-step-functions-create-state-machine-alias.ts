import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsCreateStateMachineAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsCreateStateMachineAliasHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsCreateStateMachineAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

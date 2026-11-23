import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListStateMachineAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsListStateMachineAliasesHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListStateMachineAliasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

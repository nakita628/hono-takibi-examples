import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDeleteStateMachineAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsDeleteStateMachineAliasHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDeleteStateMachineAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

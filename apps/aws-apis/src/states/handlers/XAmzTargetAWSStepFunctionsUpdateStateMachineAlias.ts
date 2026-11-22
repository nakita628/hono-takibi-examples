import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsUpdateStateMachineAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsUpdateStateMachineAliasHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsUpdateStateMachineAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

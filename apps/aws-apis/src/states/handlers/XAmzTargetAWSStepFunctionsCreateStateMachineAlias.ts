import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsCreateStateMachineAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsCreateStateMachineAliasHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsCreateStateMachineAliasRoute,
  (c) => {},
)

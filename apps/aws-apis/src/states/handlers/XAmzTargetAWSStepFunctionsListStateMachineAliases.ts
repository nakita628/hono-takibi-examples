import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListStateMachineAliasesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsListStateMachineAliasesHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListStateMachineAliasesRoute,
  (c) => {},
)

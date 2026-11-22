import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDeleteStateMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsDeleteStateMachineHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDeleteStateMachineRoute,
  (c) => {},
)

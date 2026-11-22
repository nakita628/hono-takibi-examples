import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsUpdateStateMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsUpdateStateMachineHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsUpdateStateMachineRoute,
  (c) => {},
)

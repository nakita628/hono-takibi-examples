import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsCreateStateMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsCreateStateMachineHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsCreateStateMachineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

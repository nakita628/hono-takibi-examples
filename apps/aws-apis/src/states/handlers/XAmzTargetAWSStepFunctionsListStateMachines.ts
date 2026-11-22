import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListStateMachinesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsListStateMachinesHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListStateMachinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDeleteStateMachineVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsDeleteStateMachineVersionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDeleteStateMachineVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

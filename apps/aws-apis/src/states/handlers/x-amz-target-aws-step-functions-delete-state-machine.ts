import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDeleteStateMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsDeleteStateMachineHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDeleteStateMachineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

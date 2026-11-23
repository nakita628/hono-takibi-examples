import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsUpdateStateMachineRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsUpdateStateMachineHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsUpdateStateMachineRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

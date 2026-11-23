import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDeleteStateMachineVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsDeleteStateMachineVersionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDeleteStateMachineVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListStateMachineVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsListStateMachineVersionsHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListStateMachineVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsStartExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsStartExecutionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsStartExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

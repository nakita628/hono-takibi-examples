import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsStopExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsStopExecutionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsStopExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

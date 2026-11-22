import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsStopExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsStopExecutionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsStopExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

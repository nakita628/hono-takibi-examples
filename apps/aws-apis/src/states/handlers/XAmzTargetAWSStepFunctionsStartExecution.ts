import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsStartExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsStartExecutionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsStartExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

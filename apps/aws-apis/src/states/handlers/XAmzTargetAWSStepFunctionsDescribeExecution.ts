import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDescribeExecutionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsDescribeExecutionHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDescribeExecutionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDescribeActivityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsDescribeActivityHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDescribeActivityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

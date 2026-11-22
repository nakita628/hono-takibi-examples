import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDescribeActivityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsDescribeActivityHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDescribeActivityRoute,
  (c) => {},
)

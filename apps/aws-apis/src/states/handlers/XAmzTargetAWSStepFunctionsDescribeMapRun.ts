import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDescribeMapRunRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsDescribeMapRunHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDescribeMapRunRoute,
  (c) => {},
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListMapRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsListMapRunsHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListMapRunsRoute,
  (c) => {},
)

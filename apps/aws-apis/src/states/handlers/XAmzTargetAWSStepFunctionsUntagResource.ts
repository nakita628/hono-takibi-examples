import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsUntagResourceHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsUntagResourceRoute,
  (c) => {},
)

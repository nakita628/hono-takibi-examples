import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsGetActivityTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsGetActivityTaskHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsGetActivityTaskRoute,
  (c) => {},
)

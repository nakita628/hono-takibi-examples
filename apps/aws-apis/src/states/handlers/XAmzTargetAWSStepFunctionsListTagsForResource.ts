import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListTagsForResourceRoute,
  (c) => {},
)

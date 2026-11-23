import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListExecutionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsListExecutionsHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListExecutionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListMapRunsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsListMapRunsHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListMapRunsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsCreateActivityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsCreateActivityHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsCreateActivityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

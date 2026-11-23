import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsDeleteActivityRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsDeleteActivityHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsDeleteActivityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

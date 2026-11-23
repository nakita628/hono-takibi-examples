import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsUpdateMapRunRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsUpdateMapRunHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsUpdateMapRunRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

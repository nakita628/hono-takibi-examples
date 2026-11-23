import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsTagResourceHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

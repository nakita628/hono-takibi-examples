import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsUntagResourceHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

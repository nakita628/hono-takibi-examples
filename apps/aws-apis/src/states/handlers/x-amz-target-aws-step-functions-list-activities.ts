import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsStepFunctionsListActivitiesHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListActivitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

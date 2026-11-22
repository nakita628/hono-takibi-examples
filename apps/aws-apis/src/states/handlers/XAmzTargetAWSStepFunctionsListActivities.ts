import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSStepFunctionsListActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSStepFunctionsListActivitiesHandler = app.openapi(
  postXAmzTargetAWSStepFunctionsListActivitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetPlanHandler = app.openapi(
  postXAmzTargetAWSGlueGetPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

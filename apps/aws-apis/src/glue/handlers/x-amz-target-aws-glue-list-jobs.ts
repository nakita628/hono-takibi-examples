import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueListJobsHandler = app.openapi(
  postXAmzTargetAWSGlueListJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

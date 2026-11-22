import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueListJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueListJobsHandler = app.openapi(
  postXAmzTargetAWSGlueListJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

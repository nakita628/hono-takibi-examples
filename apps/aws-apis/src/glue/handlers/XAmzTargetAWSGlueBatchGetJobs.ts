import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueBatchGetJobsHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

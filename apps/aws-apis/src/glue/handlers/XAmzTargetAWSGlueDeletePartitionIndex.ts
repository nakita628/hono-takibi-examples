import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeletePartitionIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeletePartitionIndexHandler = app.openapi(
  postXAmzTargetAWSGlueDeletePartitionIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

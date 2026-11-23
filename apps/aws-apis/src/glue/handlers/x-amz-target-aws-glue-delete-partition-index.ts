import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeletePartitionIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeletePartitionIndexHandler = app.openapi(
  postXAmzTargetAWSGlueDeletePartitionIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

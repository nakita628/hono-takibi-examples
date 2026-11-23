import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeletePartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeletePartitionHandler = app.openapi(
  postXAmzTargetAWSGlueDeletePartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

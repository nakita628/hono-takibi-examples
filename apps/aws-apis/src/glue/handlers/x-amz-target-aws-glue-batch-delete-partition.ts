import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchDeletePartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchDeletePartitionHandler = app.openapi(
  postXAmzTargetAWSGlueBatchDeletePartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

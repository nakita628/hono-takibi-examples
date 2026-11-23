import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchGetPartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchGetPartitionHandler = app.openapi(
  postXAmzTargetAWSGlueBatchGetPartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchUpdatePartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchUpdatePartitionHandler = app.openapi(
  postXAmzTargetAWSGlueBatchUpdatePartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueBatchCreatePartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueBatchCreatePartitionHandler = app.openapi(
  postXAmzTargetAWSGlueBatchCreatePartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

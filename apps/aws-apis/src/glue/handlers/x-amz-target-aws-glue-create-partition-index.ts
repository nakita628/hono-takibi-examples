import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreatePartitionIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreatePartitionIndexHandler = app.openapi(
  postXAmzTargetAWSGlueCreatePartitionIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

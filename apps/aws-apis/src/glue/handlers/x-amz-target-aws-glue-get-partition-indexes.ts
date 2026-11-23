import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetPartitionIndexesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetPartitionIndexesHandler = app.openapi(
  postXAmzTargetAWSGlueGetPartitionIndexesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

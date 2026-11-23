import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetPartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetPartitionHandler = app.openapi(
  postXAmzTargetAWSGlueGetPartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

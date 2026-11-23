import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdatePartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdatePartitionHandler = app.openapi(
  postXAmzTargetAWSGlueUpdatePartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

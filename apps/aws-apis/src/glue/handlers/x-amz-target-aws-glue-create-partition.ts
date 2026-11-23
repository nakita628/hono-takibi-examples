import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreatePartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueCreatePartitionHandler = app.openapi(
  postXAmzTargetAWSGlueCreatePartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

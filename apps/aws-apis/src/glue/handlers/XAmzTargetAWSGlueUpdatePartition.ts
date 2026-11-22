import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdatePartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdatePartitionHandler = app.openapi(
  postXAmzTargetAWSGlueUpdatePartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

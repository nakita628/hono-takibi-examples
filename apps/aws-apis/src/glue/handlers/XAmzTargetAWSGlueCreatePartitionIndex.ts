import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreatePartitionIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreatePartitionIndexHandler = app.openapi(
  postXAmzTargetAWSGlueCreatePartitionIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

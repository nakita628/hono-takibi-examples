import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueCreatePartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueCreatePartitionHandler = app.openapi(
  postXAmzTargetAWSGlueCreatePartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

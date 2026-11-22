import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetPartitionIndexesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetPartitionIndexesHandler = app.openapi(
  postXAmzTargetAWSGlueGetPartitionIndexesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

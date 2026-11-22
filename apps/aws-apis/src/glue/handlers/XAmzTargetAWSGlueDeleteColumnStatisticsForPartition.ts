import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteColumnStatisticsForPartitionHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteColumnStatisticsForPartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

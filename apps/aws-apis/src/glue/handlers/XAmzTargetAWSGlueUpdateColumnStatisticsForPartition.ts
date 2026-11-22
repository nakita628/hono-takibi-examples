import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateColumnStatisticsForPartitionHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateColumnStatisticsForPartitionHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateColumnStatisticsForPartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

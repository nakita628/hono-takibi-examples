import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetColumnStatisticsForPartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetColumnStatisticsForPartitionHandler = app.openapi(
  postXAmzTargetAWSGlueGetColumnStatisticsForPartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

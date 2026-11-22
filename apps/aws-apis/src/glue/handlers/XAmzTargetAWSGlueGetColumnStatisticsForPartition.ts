import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetColumnStatisticsForPartitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetColumnStatisticsForPartitionHandler = app.openapi(
  postXAmzTargetAWSGlueGetColumnStatisticsForPartitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

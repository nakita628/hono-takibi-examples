import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateColumnStatisticsForTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueUpdateColumnStatisticsForTableHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateColumnStatisticsForTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

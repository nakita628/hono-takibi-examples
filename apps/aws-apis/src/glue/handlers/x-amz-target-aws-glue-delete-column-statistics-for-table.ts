import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteColumnStatisticsForTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueDeleteColumnStatisticsForTableHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteColumnStatisticsForTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetColumnStatisticsForTableRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsGlueGetColumnStatisticsForTableHandler = app.openapi(
  postXAmzTargetAWSGlueGetColumnStatisticsForTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

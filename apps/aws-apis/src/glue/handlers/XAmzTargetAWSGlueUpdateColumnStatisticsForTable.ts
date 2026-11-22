import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueUpdateColumnStatisticsForTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueUpdateColumnStatisticsForTableHandler = app.openapi(
  postXAmzTargetAWSGlueUpdateColumnStatisticsForTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

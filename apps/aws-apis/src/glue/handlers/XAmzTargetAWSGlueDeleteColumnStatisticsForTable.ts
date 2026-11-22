import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueDeleteColumnStatisticsForTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueDeleteColumnStatisticsForTableHandler = app.openapi(
  postXAmzTargetAWSGlueDeleteColumnStatisticsForTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

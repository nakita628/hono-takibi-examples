import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSGlueGetColumnStatisticsForTableRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSGlueGetColumnStatisticsForTableHandler = app.openapi(
  postXAmzTargetAWSGlueGetColumnStatisticsForTableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

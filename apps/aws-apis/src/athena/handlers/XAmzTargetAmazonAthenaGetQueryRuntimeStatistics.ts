import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonAthenaGetQueryRuntimeStatisticsHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonAthenaGetQueryRuntimeStatisticsHandler = app.openapi(
  postXAmzTargetAmazonAthenaGetQueryRuntimeStatisticsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

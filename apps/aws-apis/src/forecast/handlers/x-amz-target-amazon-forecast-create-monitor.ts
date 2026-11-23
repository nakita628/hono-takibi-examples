import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateMonitorHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateMonitorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

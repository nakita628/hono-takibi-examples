import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListMonitorsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListMonitorsHandler = app.openapi(
  postXAmzTargetAmazonForecastListMonitorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

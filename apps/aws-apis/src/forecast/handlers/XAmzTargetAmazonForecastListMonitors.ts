import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListMonitorsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListMonitorsHandler = app.openapi(
  postXAmzTargetAmazonForecastListMonitorsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

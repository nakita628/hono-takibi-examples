import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteMonitorHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteMonitorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

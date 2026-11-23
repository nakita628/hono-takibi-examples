import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteMonitorRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteMonitorHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteMonitorRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

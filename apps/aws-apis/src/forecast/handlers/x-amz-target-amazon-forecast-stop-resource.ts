import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastStopResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastStopResourceHandler = app.openapi(
  postXAmzTargetAmazonForecastStopResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

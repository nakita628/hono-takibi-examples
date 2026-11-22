import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastStopResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastStopResourceHandler = app.openapi(
  postXAmzTargetAmazonForecastStopResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

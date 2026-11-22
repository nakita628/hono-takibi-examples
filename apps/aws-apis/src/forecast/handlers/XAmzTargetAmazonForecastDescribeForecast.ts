import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDescribeForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDescribeForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastDescribeForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

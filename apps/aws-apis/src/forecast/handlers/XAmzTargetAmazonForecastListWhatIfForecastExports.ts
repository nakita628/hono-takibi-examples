import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListWhatIfForecastExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListWhatIfForecastExportsHandler = app.openapi(
  postXAmzTargetAmazonForecastListWhatIfForecastExportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

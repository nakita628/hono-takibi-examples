import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListWhatIfForecastsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListWhatIfForecastsHandler = app.openapi(
  postXAmzTargetAmazonForecastListWhatIfForecastsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

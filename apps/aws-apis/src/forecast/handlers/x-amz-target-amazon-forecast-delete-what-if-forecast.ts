import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteWhatIfForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteWhatIfForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteWhatIfForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

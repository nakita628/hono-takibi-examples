import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateWhatIfForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateWhatIfForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateWhatIfForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

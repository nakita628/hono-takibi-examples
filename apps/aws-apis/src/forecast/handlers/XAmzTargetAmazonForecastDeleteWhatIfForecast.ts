import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteWhatIfForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteWhatIfForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteWhatIfForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

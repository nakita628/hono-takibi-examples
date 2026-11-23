import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastTagResourceHandler = app.openapi(
  postXAmzTargetAmazonForecastTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

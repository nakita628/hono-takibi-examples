import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastUntagResourceHandler = app.openapi(
  postXAmzTargetAmazonForecastUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

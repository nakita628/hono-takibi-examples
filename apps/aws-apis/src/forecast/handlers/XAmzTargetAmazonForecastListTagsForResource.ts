import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListTagsForResourceHandler = app.openapi(
  postXAmzTargetAmazonForecastListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

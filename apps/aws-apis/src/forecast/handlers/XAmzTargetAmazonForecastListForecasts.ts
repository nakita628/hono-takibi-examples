import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListForecastsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListForecastsHandler = app.openapi(
  postXAmzTargetAmazonForecastListForecastsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

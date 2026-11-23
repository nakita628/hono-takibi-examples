import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastRuntimeQueryForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastRuntimeQueryForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastRuntimeQueryForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

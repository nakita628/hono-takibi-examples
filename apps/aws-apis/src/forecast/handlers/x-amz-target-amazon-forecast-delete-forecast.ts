import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

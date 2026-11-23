import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

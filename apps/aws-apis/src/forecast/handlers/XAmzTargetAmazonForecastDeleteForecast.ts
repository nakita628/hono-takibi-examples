import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteForecastRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteForecastHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteForecastRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

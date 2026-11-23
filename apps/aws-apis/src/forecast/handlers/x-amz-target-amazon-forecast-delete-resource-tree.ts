import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteResourceTreeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteResourceTreeHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteResourceTreeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

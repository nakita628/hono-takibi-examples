import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastResumeResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastResumeResourceHandler = app.openapi(
  postXAmzTargetAmazonForecastResumeResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListForecastExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListForecastExportJobsHandler = app.openapi(
  postXAmzTargetAmazonForecastListForecastExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

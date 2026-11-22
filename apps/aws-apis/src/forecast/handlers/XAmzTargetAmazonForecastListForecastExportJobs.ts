import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListForecastExportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListForecastExportJobsHandler = app.openapi(
  postXAmzTargetAmazonForecastListForecastExportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

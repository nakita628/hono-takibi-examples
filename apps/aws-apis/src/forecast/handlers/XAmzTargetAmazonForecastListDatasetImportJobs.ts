import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListDatasetImportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListDatasetImportJobsHandler = app.openapi(
  postXAmzTargetAmazonForecastListDatasetImportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

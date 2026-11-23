import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteDatasetImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteDatasetImportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteDatasetImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

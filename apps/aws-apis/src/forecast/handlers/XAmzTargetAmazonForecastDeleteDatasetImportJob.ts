import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteDatasetImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteDatasetImportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteDatasetImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

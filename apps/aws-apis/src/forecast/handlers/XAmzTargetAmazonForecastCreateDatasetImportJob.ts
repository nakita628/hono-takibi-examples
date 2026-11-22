import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateDatasetImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastCreateDatasetImportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateDatasetImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

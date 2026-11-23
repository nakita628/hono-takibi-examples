import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateForecastExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateForecastExportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateForecastExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

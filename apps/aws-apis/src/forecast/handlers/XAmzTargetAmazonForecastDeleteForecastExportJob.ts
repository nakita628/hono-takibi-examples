import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteForecastExportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteForecastExportJobHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteForecastExportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

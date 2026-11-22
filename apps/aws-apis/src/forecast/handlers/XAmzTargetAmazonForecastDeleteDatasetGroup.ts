import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastDeleteDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

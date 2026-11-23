import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastUpdateDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastUpdateDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonForecastUpdateDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

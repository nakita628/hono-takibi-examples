import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastCreateDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

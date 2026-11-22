import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastUpdateDatasetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastUpdateDatasetGroupHandler = app.openapi(
  postXAmzTargetAmazonForecastUpdateDatasetGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

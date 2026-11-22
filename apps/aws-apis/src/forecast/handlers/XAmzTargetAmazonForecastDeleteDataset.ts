import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastDeleteDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastDeleteDatasetHandler = app.openapi(
  postXAmzTargetAmazonForecastDeleteDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

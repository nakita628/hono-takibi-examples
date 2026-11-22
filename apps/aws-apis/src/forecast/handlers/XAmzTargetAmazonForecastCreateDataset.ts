import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastCreateDatasetHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

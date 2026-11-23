import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastCreateDatasetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastCreateDatasetHandler = app.openapi(
  postXAmzTargetAmazonForecastCreateDatasetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

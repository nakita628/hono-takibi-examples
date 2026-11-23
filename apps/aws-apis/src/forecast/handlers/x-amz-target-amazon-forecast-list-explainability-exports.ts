import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListExplainabilityExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListExplainabilityExportsHandler = app.openapi(
  postXAmzTargetAmazonForecastListExplainabilityExportsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

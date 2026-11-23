import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListExplainabilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListExplainabilitiesHandler = app.openapi(
  postXAmzTargetAmazonForecastListExplainabilitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

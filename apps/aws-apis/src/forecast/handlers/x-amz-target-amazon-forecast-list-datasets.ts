import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListDatasetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonForecastListDatasetsHandler = app.openapi(
  postXAmzTargetAmazonForecastListDatasetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListDatasetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListDatasetsHandler = app.openapi(
  postXAmzTargetAmazonForecastListDatasetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonForecastListDatasetGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonForecastListDatasetGroupsHandler = app.openapi(
  postXAmzTargetAmazonForecastListDatasetGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

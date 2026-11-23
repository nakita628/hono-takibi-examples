import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeCreateMetricAttributionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeCreateMetricAttributionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeCreateMetricAttributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

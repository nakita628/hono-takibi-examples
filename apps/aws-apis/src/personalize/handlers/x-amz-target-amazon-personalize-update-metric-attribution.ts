import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeUpdateMetricAttributionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonPersonalizeUpdateMetricAttributionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeUpdateMetricAttributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

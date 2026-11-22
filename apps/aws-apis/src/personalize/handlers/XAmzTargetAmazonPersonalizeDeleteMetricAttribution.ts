import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeDeleteMetricAttributionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeDeleteMetricAttributionHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeDeleteMetricAttributionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

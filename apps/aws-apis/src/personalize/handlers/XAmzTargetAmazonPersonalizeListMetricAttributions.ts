import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeListMetricAttributionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeListMetricAttributionsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeListMetricAttributionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonPersonalizeGetSolutionMetricsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonPersonalizeGetSolutionMetricsHandler = app.openapi(
  postXAmzTargetAmazonPersonalizeGetSolutionMetricsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
